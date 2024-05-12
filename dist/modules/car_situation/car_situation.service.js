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
exports.CarSituationService = void 0;
const common_1 = require("@nestjs/common");
const car_situation_entity_1 = require("./entities/car_situation.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CarSituationService = class CarSituationService {
    constructor(car_situation_repository) {
        this.car_situation_repository = car_situation_repository;
    }
    async get_cars_situation() {
        return await this.car_situation_repository.find();
    }
    async get_car_situation(id) {
        const car_situation = await this.car_situation_repository.findOne({ where: { id } });
        if (!car_situation) {
            throw new common_1.NotFoundException(`car_situation with id ${id} not found`);
        }
        return car_situation;
    }
    async create_car_situation({ type_situation }) {
        const car_situation = this.car_situation_repository.create({
            type_situation
        });
        return this.car_situation_repository.save(car_situation);
    }
    async delete_car_situation(id) {
        const car_situation = await this.get_car_situation(id);
        await this.car_situation_repository.delete(car_situation);
    }
};
exports.CarSituationService = CarSituationService;
exports.CarSituationService = CarSituationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(car_situation_entity_1.car_situation)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CarSituationService);
//# sourceMappingURL=car_situation.service.js.map