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
exports.VacationService = void 0;
const common_1 = require("@nestjs/common");
const vacation_entity_1 = require("./entities/vacation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let VacationService = class VacationService {
    constructor(vacationRepository) {
        this.vacationRepository = vacationRepository;
    }
    async get_drivers_vacation() {
        return await this.vacationRepository.find({ relations: ['car_situation', 'car'] });
    }
    async get_driver_vacation(id) {
        const foundInside = await this.vacationRepository.findOne({ where: { id }, relations: ['car_situation', 'car'] });
        if (!foundInside) {
            throw new common_1.NotFoundException(`Driver with id ${id} not found`);
        }
        return foundInside;
    }
    async delete_driver_vacation(id) {
        const car_inside = await this.get_driver_vacation(id);
        await this.vacationRepository.delete(car_inside);
    }
};
exports.VacationService = VacationService;
exports.VacationService = VacationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vacation_entity_1.vacation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VacationService);
//# sourceMappingURL=vacation.service.js.map