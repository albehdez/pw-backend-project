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
exports.DriverSituationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const driver_situation_entity_1 = require("./entities/driver_situation.entity");
const typeorm_2 = require("typeorm");
let DriverSituationService = class DriverSituationService {
    constructor(driver_situation_repository) {
        this.driver_situation_repository = driver_situation_repository;
    }
    async get_drivers_situation() {
        return await this.driver_situation_repository.find();
    }
    async get_driver_situation(id) {
        const driver_situation = await this.driver_situation_repository.findOne({ where: { id } });
        ;
        if (!driver_situation) {
            throw new common_1.NotFoundException(`driver_situation with id ${id} not found`);
        }
        return driver_situation;
    }
    async create_driver_situation({ type_situation }) {
        const driver_situation = this.driver_situation_repository.create({
            type_situation
        });
        return this.driver_situation_repository.save(driver_situation);
    }
    async delete_driver_situation(id) {
        const driver_situation = await this.get_driver_situation(id);
        await this.driver_situation_repository.delete(driver_situation);
    }
};
exports.DriverSituationService = DriverSituationService;
exports.DriverSituationService = DriverSituationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_situation_entity_1.driver_situation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DriverSituationService);
//# sourceMappingURL=driver_situation.service.js.map