"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("./entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const entities_2 = require("../turistic_group/entities");
const entities_3 = require("../programing/entities");
const entities_4 = require("../user/entities");
const role_enum_1 = require("../common/enums/role.enum");
const transport_service_1 = require("../transport/transport.service");
const request_transport_service_1 = require("../request_transport/request_transport.service");
const car_service_1 = require("../car/car.service");
const driver_service_1 = require("../driver/driver.service");
const schedule_1 = require("@nestjs/schedule");
const roadmap_service_1 = require("../roadmap/roadmap.service");
const roadmap_request_service_1 = require("../roadmap_request/roadmap_request.service");
let RequestService = class RequestService {
    constructor(requestRepository, TGRepository, programingRepository, clientRepository, transportService, carService, driverService, RtransportService, roadmapService, RroadmapService) {
        this.requestRepository = requestRepository;
        this.TGRepository = TGRepository;
        this.programingRepository = programingRepository;
        this.clientRepository = clientRepository;
        this.transportService = transportService;
        this.carService = carService;
        this.driverService = driverService;
        this.RtransportService = RtransportService;
        this.roadmapService = roadmapService;
        this.RroadmapService = RroadmapService;
    }
    async get_requests() {
        return await this.requestRepository.find({
            relations: ["turistic_group", "programing"],
        });
    }
    async get_request(id) {
        const foundRequest = await this.requestRepository.findOne({
            where: { id },
            relations: ["turistic_group", "programing"],
        });
        if (!foundRequest) {
            throw new common_1.NotFoundException(`Request with id ${id} not found`);
        }
        return foundRequest;
    }
    async create_request({ group, programing, request_date, client }, { is_copilot, car, driver }) {
        if (client) {
            var foundClient = await this.clientRepository.findOne({
                where: { id: client.id },
            });
            if (!foundClient) {
                throw new common_1.NotFoundException(`Client with id ${group.id} does not exist`);
            }
            if (foundClient.role.role !== role_enum_1.Role.Client) {
                throw new common_1.NotFoundException(`User with id ${client.id} does not Client`);
            }
        }
        if (group) {
            var foundGroup = await this.TGRepository.findOne({
                where: { id: group.id },
            });
            if (!foundGroup) {
                throw new common_1.NotFoundException(`Turistic Group withid ${group.id} does not exist`);
            }
        }
        if (programing) {
            var foundPrograming = await this.programingRepository.findOne({
                where: { id: programing.id },
            });
            if (!foundPrograming) {
                throw new common_1.NotFoundException(`Programing with id ${programing.id} does not exist`);
            }
        }
        const Ncar = this.carService.get_car(car.id);
        const Ndriver = this.driverService.get_driver(driver.id);
        const transport = this.transportService.create_transport({
            car: await Ncar,
            driver: await Ndriver,
            is_copilot,
        });
        const newRequest = this.requestRepository.create({
            group: foundGroup,
            programing: foundPrograming,
            request_date,
        });
        const savedRequest = await this.requestRepository.save(newRequest);
        this.RtransportService.create_request_trasnport({
            request: newRequest,
            trasnport: await transport,
        });
        return savedRequest;
    }
    async update_request(id, { group, programing, request_date }) {
        const requestUpdate = await this.get_request(id);
        if (!requestUpdate) {
            throw new common_1.NotFoundException(`Request with id ${id} not found`);
        }
        if (request_date && new Date(request_date) <= new Date()) {
            throw new common_1.NotFoundException("La fecha del request debe ser mayor a la fecha actual");
        }
        if (group) {
            const group_u = await this.TGRepository.findOne({
                where: { id: group.id },
            });
            if (!group_u) {
                throw new common_1.NotFoundException(`Turistic Group whith id ${group.id} not found`);
            }
            requestUpdate.group = group_u;
        }
        if (programing) {
            const programing_u = await this.programingRepository.findOne({
                where: { id: programing.id },
            });
            if (!programing_u) {
                throw new common_1.NotFoundException(`Programing whith id ${group.id} not found`);
            }
            requestUpdate.programing = programing_u;
        }
        if (request_date) {
            requestUpdate.request_date = new Date(request_date);
        }
        const upr = await this.requestRepository.save(requestUpdate);
        return upr;
    }
    async delete_request(id) {
        const requestdelete = await this.get_request(id);
        if (!requestdelete) {
            throw new common_1.NotFoundException(`Request with id ${id} not found`);
        }
        await this.requestRepository.remove(requestdelete);
    }
    async handleCron() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();
        const startOfToday = new Date(currentYear, currentMonth, currentDay).setHours(0, 0, 0, 0);
        const endOfToday = new Date(currentYear, currentMonth, currentDay).setHours(23, 59, 59, 999);
        const request = await this.requestRepository.find({
            where: {
                request_date: (0, typeorm_1.Between)(new Date(startOfToday), new Date(endOfToday)),
            },
            relations: ["request_transport", "request_transport.transport"],
        });
        request.forEach(async (req) => {
            for (const rt of req.request_transport) {
                const car = await this.carService.get_car(rt.transport.car.id);
                if (car) {
                    var km_star = car.km_available;
                    var km_end = km_star + req.programing.km_to_travel;
                    var roadmap = await this.roadmapService.create_roadmap({
                        km_start: km_star,
                        km_end: km_end,
                        car,
                    });
                    await this.RroadmapService.create_roadmap_request({
                        request: req,
                        roadmap: roadmap,
                    });
                    await this.carService.update_car_km(car.id, km_end);
                }
            }
        });
    }
};
exports.RequestService = RequestService;
__decorate([
    (0, schedule_1.Cron)("0 0 * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RequestService.prototype, "handleCron", null);
exports.RequestService = RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.request)),
    __param(1, (0, typeorm_2.InjectRepository)(entities_2.turistic_group)),
    __param(2, (0, typeorm_2.InjectRepository)(entities_3.programing)),
    __param(3, (0, typeorm_2.InjectRepository)(entities_4.user)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        transport_service_1.TransportService,
        car_service_1.CarService,
        driver_service_1.DriverService,
        request_transport_service_1.RequestTransportService,
        roadmap_service_1.RoadmapService,
        roadmap_request_service_1.RoadmapRequestService])
], RequestService);
//# sourceMappingURL=request.service.js.map