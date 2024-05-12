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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const car_entity_1 = require("./entities/car.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("../car_situation/entities");
const inside_entity_1 = require("../inside/entities/inside.entity");
let CarService = class CarService {
    constructor(carRepository, car_situationRepository, insideRepository) {
        this.carRepository = carRepository;
        this.car_situationRepository = car_situationRepository;
        this.insideRepository = insideRepository;
    }
    async get_cars() {
        return await this.carRepository.find({ relations: ['car_situation', 'inside'] });
    }
    async get_car(id) {
        const foundCar = await this.carRepository.findOne({ where: { id }, relations: ['car_situation', 'inside'] });
        if (!foundCar) {
            throw new common_1.NotFoundException(`Car with id ${id} not found`);
        }
        return foundCar;
    }
    async create_car({ brand, number_seats, km_available, license_plate, situation, return_date }) {
        const foundSituation = await this.car_situationRepository.findOne({ where: { type_situation: situation.type_situation } });
        if (!foundSituation) {
            throw new common_1.NotFoundException(`Car situation with type ${situation.type_situation} not found`);
        }
        const foundLicensePlate = await this.carRepository.findOne({ where: { license_plate } });
        if (foundLicensePlate) {
            throw new common_1.NotFoundException(`Car with license plate ${license_plate} already exists`);
        }
        const newCar = this.carRepository.create({ brand, number_seats, km_available, license_plate, car_situation: foundSituation });
        const savedCar = await this.carRepository.save(newCar);
        if (return_date && situation.type_situation === "Inside") {
            const newInside = this.insideRepository.create({ return_date, car: savedCar, car_situation: foundSituation });
            await this.insideRepository.save(newInside);
        }
        return savedCar;
    }
    async update_car(id, { brand, number_seats, km_available, license_plate, situation, return_date }) {
        const carToUpdate = await this.get_car(id);
        if (!carToUpdate) {
            throw new common_1.NotFoundException(`Car with id ${id} not found`);
        }
        if (situation) {
            const foundSituation = await this.car_situationRepository.findOne({ where: { type_situation: situation.type_situation } });
            if (!foundSituation) {
                throw new common_1.NotFoundException(`Car situation with type ${situation.type_situation} not found`);
            }
            carToUpdate.car_situation = foundSituation;
        }
        if (brand) {
            carToUpdate.brand = brand;
        }
        if (number_seats) {
            carToUpdate.number_seats = number_seats;
        }
        if (km_available) {
            carToUpdate.km_available = km_available;
        }
        if (license_plate) {
            carToUpdate.license_plate = license_plate;
        }
        const updatedCar = await this.carRepository.save(carToUpdate);
        if (situation && return_date && situation.type_situation === "Inside") {
            const foundSituation = await this.car_situationRepository.findOne({ where: { type_situation: situation.type_situation } });
            if (!foundSituation) {
                throw new common_1.NotFoundException(`Car situation with type ${situation.type_situation} not found`);
            }
            let insideEntry = await this.insideRepository.findOne({ where: { car: updatedCar } });
            if (!insideEntry) {
                const newInside = this.insideRepository.create({ return_date, car_situation: foundSituation, car: updatedCar });
                insideEntry = await this.insideRepository.save(newInside);
            }
            else {
                insideEntry.return_date = return_date;
                insideEntry.car_situation = foundSituation;
                await this.insideRepository.save(insideEntry);
            }
        }
        else {
            await this.insideRepository.delete({ car: updatedCar });
        }
        const updatedCarWithInside = await this.carRepository.findOne({ where: { id: updatedCar.id }, relations: ['inside'] });
        return updatedCarWithInside;
    }
    async delete_car(id) {
        const carToDelete = await this.carRepository.findOne({ where: { id } });
        if (!carToDelete) {
            throw new common_1.NotFoundException(`Car with id ${id} not found`);
        }
        const insideEntry = await this.insideRepository.findOne({ where: { car: carToDelete } });
        if (insideEntry) {
            await this.insideRepository.remove(insideEntry);
        }
        await this.carRepository.remove(carToDelete);
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(car_entity_1.car)),
    __param(1, (0, typeorm_2.InjectRepository)(entities_1.car_situation)),
    __param(2, (0, typeorm_2.InjectRepository)(inside_entity_1.inside)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CarService);
//# sourceMappingURL=car.service.js.map