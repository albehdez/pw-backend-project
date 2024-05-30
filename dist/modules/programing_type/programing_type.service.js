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
exports.ProgramingTypeService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("./entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ProgramingTypeService = class ProgramingTypeService {
    constructor(programing_typeRepository) {
        this.programing_typeRepository = programing_typeRepository;
    }
    async get_programings_type() {
        return await this.programing_typeRepository.find();
    }
    async get_programing_type(id) {
        const programing_type = await this.programing_typeRepository.findOne({
            where: { id },
        });
        if (!programing_type) {
            throw new common_1.NotFoundException(`Programing Type with id ${id} not found`);
        }
        return programing_type;
    }
    async create_programing_type({ programing_type }) {
        const programing_type_create = this.programing_typeRepository.create({
            programing_type,
        });
        return this.programing_typeRepository.save(programing_type_create);
    }
    async delete_programing_type(id) {
        const programing_type = await this.get_programing_type(id);
        await this.programing_typeRepository.delete(programing_type);
    }
};
exports.ProgramingTypeService = ProgramingTypeService;
exports.ProgramingTypeService = ProgramingTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.programing_type)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProgramingTypeService);
//# sourceMappingURL=programing_type.service.js.map