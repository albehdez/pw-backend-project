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
exports.RoadmapRequestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
const entities_2 = require("../roadmap/entities");
const entities_3 = require("../request/entities");
let RoadmapRequestService = class RoadmapRequestService {
    constructor(roadmapqRepository, roadmapRepository, requestRepository) {
        this.roadmapqRepository = roadmapqRepository;
        this.roadmapRepository = roadmapRepository;
        this.requestRepository = requestRepository;
    }
    async get_roadmaps_request() {
        return await this.roadmapqRepository.find({
            relations: ["request", "roadmap"],
        });
    }
    async get_roadmap_request(id) {
        const foundRoadmap_request = await this.roadmapqRepository.findOne({
            where: { id },
            relations: ["request", "roadmap"],
        });
        if (!foundRoadmap_request) {
            throw new common_1.NotFoundException(`Roadmap Request with id ${id} not found`);
        }
        return foundRoadmap_request;
    }
    async create_roadmap_request({ request, roadmap, }) {
        if (request) {
            var foundrequest = await this.requestRepository.findOne({
                where: { id: request.id },
            });
            if (!foundrequest) {
                throw new common_1.NotFoundException(`Request with id${request.id} does not exist`);
            }
            if (roadmap) {
                var foundroadmap = await this.roadmapRepository.findOne({
                    where: { id: roadmap.id },
                });
                if (!foundroadmap) {
                    throw new common_1.NotFoundException(`Roadmap with id${request.id} does not exist`);
                }
            }
            const newRoadmapRequest = this.roadmapqRepository.create({
                request: foundrequest,
                roadmap: foundroadmap,
            });
            const saveRoadmapRequest = await this.roadmapqRepository.save(newRoadmapRequest);
            return saveRoadmapRequest;
        }
    }
    async delete_roadmap_request(id) {
        const deleteRoadmap_request = await this.get_roadmap_request(id);
        await this.roadmapqRepository.delete(deleteRoadmap_request);
    }
};
exports.RoadmapRequestService = RoadmapRequestService;
exports.RoadmapRequestService = RoadmapRequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.roadmap_request)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.roadmap)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_3.request)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RoadmapRequestService);
//# sourceMappingURL=roadmap_request.service.js.map