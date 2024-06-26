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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let RoleService = class RoleService {
    constructor(role_repository) {
        this.role_repository = role_repository;
    }
    async get_roles() {
        return await this.role_repository.find();
    }
    async get_role(id) {
        const role = await this.role_repository.findOne({ where: { id } });
        if (!role) {
            throw new common_1.NotFoundException(`Role with id ${id} not found`);
        }
        return role;
    }
    async create_role({ role }) {
        const newrole = this.role_repository.create({
            role
        });
        return this.role_repository.save(newrole);
    }
    async delete_role(id) {
        const role = await this.get_role(id);
        await this.role_repository.delete(role);
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map