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
exports.TransportService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("./entities");
const typeorm_1 = require("@nestjs/typeorm");
const entities_2 = require("../car/entities");
const driver_entitty_1 = require("../driver/entities/driver.entitty");
const typeorm_2 = require("typeorm");
let TransportService = class TransportService {
    constructor(transportRepository, carRepository, driverRepository) {
        this.transportRepository = transportRepository;
        this.carRepository = carRepository;
        this.driverRepository = driverRepository;
    }
    async get_transports() {
        return await this.transportRepository.find({ relations: ['car', 'driver'] });
    }
    async get_transport(id) {
        const foundTranspor = await this.transportRepository.findOne({ where: { id }, relations: ['car', 'driver'] });
        if (!foundTranspor) {
            throw new common_1.NotFoundException(`Transport with id ${id} not found`);
        }
        return foundTranspor;
    }
    async create_transport({ is_copilot, car, driver }) {
        const foundCar = await this.carRepository.findOne({ where: { id: car.id } });
        if (!foundCar) {
            throw new common_1.NotFoundException(`Car with type ${car.id} not found`);
        }
        const foundDriver = await this.driverRepository.findOne({ where: { id: driver.id } });
        if (foundDriver) {
            throw new common_1.NotFoundException(`Driver with id ${driver.id} not found`);
        }
        const newTransport = this.transportRepository.create({ is_copilot, car: foundCar, driver: foundDriver });
        const savedTransport = await this.carRepository.save(newTransport);
        return savedTransport;
    }
    async update_transport(id, { is_copilot, car, driver }) {
        const foundTransport = await this.get_transport(id);
        if (!foundTransport) {
            throw new common_1.NotFoundException(`Transport with type ${id} not found`);
        }
        const foundCar = await this.carRepository.findOne({ where: { id: car.id } });
        if (!foundCar) {
            throw new common_1.NotFoundException(`Car with type ${car.id} not found`);
        }
        foundTransport.car = foundCar;
        const foundDriver = await this.driverRepository.findOne({ where: { id: driver.id } });
        if (foundDriver) {
            throw new common_1.NotFoundException(`Driver with id ${driver.id} not found`);
        }
        foundTransport.driver = foundDriver;
        if (is_copilot) {
            foundTransport.is_copilot = is_copilot;
        }
        const updatedTransport = await this.transportRepository.save(foundTransport);
        return updatedTransport;
    }
    async delete_transport(id) {
        const transportToDelete = await this.transportRepository.findOne({ where: { id } });
        if (!transportToDelete) {
            throw new common_1.NotFoundException(`Transport with id ${id} not found`);
        }
        await this.transportRepository.remove(transportToDelete);
    }
};
exports.TransportService = TransportService;
exports.TransportService = TransportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.transport)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.car)),
    __param(2, (0, typeorm_1.InjectRepository)(driver_entitty_1.driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TransportService);
//# sourceMappingURL=transport.service.js.map