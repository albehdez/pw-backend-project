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
exports.RoadmapService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../car/entities");
const entities_2 = require("./entities");
const typeorm_2 = require("typeorm");
let RoadmapService = class RoadmapService {
    constructor(roadmapRepository, carRepository) {
        this.roadmapRepository = roadmapRepository;
        this.carRepository = carRepository;
    }
    async get_raodmaps() {
        return await this.roadmapRepository.find({ relations: ['car'] });
    }
    async get_raodmap(id) {
        const foundRoadmap = await this.roadmapRepository.findOne({ where: { car: { id: id } }, relations: ['car'] });
        if (!foundRoadmap) {
            throw new common_1.NotFoundException(`Roadmap with Car id ${id} not found`);
        }
        return foundRoadmap;
    }
    async create_roadmap({ km_start, km_end, car }) {
        const foundCar = await this.carRepository.findOne({ where: { id: car.id } });
        if (!foundCar) {
            throw new common_1.NotFoundException(`Car with id ${car.id} not found`);
        }
        const newRoadmap = this.roadmapRepository.create({ km_start, km_end, car: foundCar });
        const savedRoadmap = await this.roadmapRepository.save(newRoadmap);
        return savedRoadmap;
    }
    async delete_roadmap(id) {
        const roadmapToDelete = await this.get_raodmap(id);
        if (!roadmapToDelete) {
            throw new common_1.NotFoundException(`Roadmap with id ${id} not found`);
        }
        await this.roadmapRepository.remove(roadmapToDelete);
    }
};
exports.RoadmapService = RoadmapService;
exports.RoadmapService = RoadmapService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_2.roadmap)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.car)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoadmapService);
//# sourceMappingURL=roadmap.service.js.map