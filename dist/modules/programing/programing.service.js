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
exports.ProgramingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
const entities_2 = require("../programing_type/entities");
let ProgramingService = class ProgramingService {
    constructor(programingRepository, programing_typeRepository) {
        this.programingRepository = programingRepository;
        this.programing_typeRepository = programing_typeRepository;
    }
    async get_programings() {
        return await this.programingRepository.find({ relations: ['programing_type'] });
    }
    async get_programing(id) {
        const foundPrograming = await this.programingRepository.findOne({ where: { id }, relations: ['programing_type'] });
        if (foundPrograming) {
            throw new common_1.NotFoundException(`Programing with id ${id} not found`);
        }
        return foundPrograming;
    }
    async create_programing({ type, start_time, end_time, description, km_to_travel, delay }) {
        const foundProgramingType = await this.programing_typeRepository.findOne({ where: { programing_type: type.programing_type } });
        if (!foundProgramingType) {
            throw new common_1.NotFoundException(`Programing type with type ${type.programing_type} not found`);
        }
        if (end_time <= start_time) {
            throw new common_1.NotFoundException('End time must be after start time');
        }
        const newPrograming = this.programingRepository.create({ programing_type: foundProgramingType, start_time, end_time, description, km_to_travel, delay });
        const savePrograming = await this.programingRepository.save(newPrograming);
        return savePrograming;
    }
    async update_programing(id, { type, start_time, end_time, description, km_to_travel, delay }) {
        const programingToUpdate = await this.get_programing(id);
        if (!programingToUpdate) {
            throw new common_1.NotFoundException(`Programing with id ${id} not found`);
        }
        if (end_time <= start_time) {
            throw new common_1.NotFoundException('End time must be after start time');
        }
        if (type) {
            const foundProgramingType = await this.programing_typeRepository.findOne({ where: { programing_type: type.programing_type } });
            if (!foundProgramingType) {
                throw new common_1.NotFoundException(`Programing type with type ${type.programing_type} not found`);
            }
            programingToUpdate.programing_type = foundProgramingType;
        }
        if (start_time) {
            programingToUpdate.start_time = start_time;
        }
        if (end_time) {
            programingToUpdate.end_time = end_time;
        }
        if (description) {
            programingToUpdate.description = description;
        }
        if (km_to_travel) {
            programingToUpdate.km_to_travel = km_to_travel;
        }
        if (delay) {
            programingToUpdate.delay = delay;
        }
        const UpdatedPrograming = await this.programingRepository.save(programingToUpdate);
        return UpdatedPrograming;
    }
    async delete_programing(id) {
        const programingToDelete = await this.programingRepository.findOne({ where: { id } });
        if (!programingToDelete) {
            throw new common_1.NotFoundException(`Programing with id ${id} not found`);
        }
        await this.programingRepository.remove(programingToDelete);
    }
};
exports.ProgramingService = ProgramingService;
exports.ProgramingService = ProgramingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.programing)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.programing_type)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], ProgramingService);
//# sourceMappingURL=programing.service.js.map