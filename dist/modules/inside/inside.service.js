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
exports.InsideService = void 0;
const common_1 = require("@nestjs/common");
const inside_entity_1 = require("./entities/inside.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let InsideService = class InsideService {
    constructor(insideRepository) {
        this.insideRepository = insideRepository;
    }
    async get_cars_inside() {
        return await this.insideRepository.find({ relations: ['car_situation', 'car'] });
    }
    async get_car_inside(id) {
        const foundInside = await this.insideRepository.findOne({ where: { id }, relations: ['car_situation', 'car'] });
        if (!foundInside) {
            throw new common_1.NotFoundException(`Car with id ${id} not found`);
        }
        return foundInside;
    }
    async delete_car_inside(id) {
        const car_inside = await this.get_car_inside(id);
        await this.insideRepository.delete(car_inside);
    }
};
exports.InsideService = InsideService;
exports.InsideService = InsideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inside_entity_1.inside)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InsideService);
//# sourceMappingURL=inside.service.js.map