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
let RequestService = class RequestService {
    constructor(requestRepository, TGRepository, programingRepository, clientRepository, transportService, RtransportService) {
        this.requestRepository = requestRepository;
        this.TGRepository = TGRepository;
        this.programingRepository = programingRepository;
        this.clientRepository = clientRepository;
        this.transportService = transportService;
        this.RtransportService = RtransportService;
    }
    async get_requests() {
        return await this.requestRepository.find({ relations: ['turistic_group', 'programing'] });
    }
    async get_request(id) {
        const foundRequest = await this.requestRepository.findOne({ where: { id }, relations: ['turistic_group', 'programing'] });
        if (!foundRequest) {
            throw new common_1.NotFoundException(`Request with id ${id} not found`);
        }
        return foundRequest;
    }
    async create_request({ group, programing, request_date, client }, idTransport) {
        if (client) {
            var foundClient = await this.clientRepository.findOne({ where: { id: client.id } });
            if (!foundClient) {
                throw new common_1.NotFoundException(`Client with id ${group.id} does not exist`);
            }
            if (foundClient.role.role !== role_enum_1.Role.Client) {
                throw new common_1.NotFoundException(`User with id ${group.id} does not Client`);
            }
        }
        if (group) {
            var foundGroup = await this.TGRepository.findOne({ where: { id: group.id } });
            if (!foundGroup) {
                throw new common_1.NotFoundException(`Turistic Group withid ${group.id} does not exist`);
            }
        }
        if (programing) {
            var foundPrograming = await this.programingRepository.findOne({ where: { id: programing.id } });
            if (!foundPrograming) {
                throw new common_1.NotFoundException(`Programing with id ${programing.id} does not exist`);
            }
        }
        const newRequest = this.requestRepository.create({ group: foundGroup, programing: foundPrograming, request_date });
        const savedRequest = await this.requestRepository.save(newRequest);
        const transport = this.transportService.get_transport(idTransport);
        this.RtransportService.create_request_trasnport({ request: newRequest, trasnport: await transport });
        return savedRequest;
    }
};
exports.RequestService = RequestService;
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
        request_transport_service_1.RequestTransportService])
], RequestService);
//# sourceMappingURL=request.service.js.map