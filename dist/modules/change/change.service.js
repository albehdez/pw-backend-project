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
exports.ChangeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
const entities_2 = require("../change_type/entities");
const request_entity_1 = require("../request/entities/request.entity");
let ChangeService = class ChangeService {
    constructor(changeRepository, change_typeRepository, requestRepository) {
        this.changeRepository = changeRepository;
        this.change_typeRepository = change_typeRepository;
        this.requestRepository = requestRepository;
    }
    async get_changes() {
        return await this.changeRepository.find({ relations: ['change_type', 'request'] });
    }
    async get_change(id) {
        const foundCar = await this.changeRepository.findOne({ where: { id }, relations: ['change_type', 'request'] });
        if (!foundCar) {
            throw new common_1.NotFoundException(`Change with id ${id} not found`);
        }
        return foundCar;
    }
    async create_change({ change_type, description, request }) {
        const foundType = await this.change_typeRepository.findOne({ where: { change_type: change_type.change_type } });
        if (!foundType) {
            throw new common_1.NotFoundException(`Change Type situation with type ${change_type.change_type} not found`);
        }
        const foundRequest = await this.requestRepository.findOne({ where: { id: request.id } });
        if (foundRequest) {
            throw new common_1.NotFoundException(`Request with id ${request.id} already exists`);
        }
        const newChange = this.changeRepository.create({ change_type: foundType, description, request: foundRequest });
        const savedChange = await this.changeRepository.save(newChange);
        return savedChange;
    }
    async delete_change(id) {
        const changeToDelete = await this.changeRepository.findOne({ where: { id } });
        if (!changeToDelete) {
            throw new common_1.NotFoundException(`Change with id ${id} not found`);
        }
        await this.changeRepository.remove(changeToDelete);
    }
};
exports.ChangeService = ChangeService;
exports.ChangeService = ChangeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.change)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.change_type)),
    __param(2, (0, typeorm_1.InjectRepository)(request_entity_1.request)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ChangeService);
//# sourceMappingURL=change.service.js.map