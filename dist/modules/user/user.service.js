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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const entities_1 = require("../role/entities");
let UserService = class UserService {
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async create_user(createUserDto) {
        const foundRole = await this.roleRepository.findOne({
            where: { role: createUserDto.role },
        });
        if (!foundRole)
            throw new common_1.BadRequestException(`Rol '${createUserDto.role}' not found`);
        const foundUser = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (foundUser)
            throw new common_1.BadRequestException(`User with email '${createUserDto.email}' already exists`);
        const newUser = new user_entity_1.user();
        newUser.name = createUserDto.name;
        newUser.email = createUserDto.email;
        newUser.password = createUserDto.password;
        newUser.role = foundRole;
        const createdUser = await this.userRepository.save(newUser);
        return createdUser;
    }
    async get_users() {
        return await this.userRepository.find({ relations: ["role"] });
    }
    async get_user(id) {
        const foundUser = await this.userRepository.findOne({
            where: { id },
            relations: ["role"],
        });
        if (!foundUser) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        return foundUser;
    }
    async findOneByEmail(email) {
        return await this.userRepository.findOne({
            where: { email },
            relations: ["role"],
        });
    }
    async delete_user(email) {
        const userToDelete = await this.findOneByEmail(email);
        if (!userToDelete) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        await this.userRepository.remove(userToDelete);
    }
    async update_user(email, userUpdate) {
        const userToUpdate = await this.findOneByEmail(email);
        if (!userToUpdate) {
            throw new common_1.NotFoundException(`User with id ${email} not found`);
        }
        if (userUpdate.new_password) {
            userToUpdate.password = userUpdate.new_password;
        }
        const updatedUser = await this.userRepository.save(userToUpdate);
        return updatedUser;
    }
    async update_user_role(id, userRoleUpdate) {
        const userToUpdate = await this.userRepository.findOne({ where: { id } });
        if (!userToUpdate) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        const foundRole = await this.roleRepository.findOne({
            where: { role: userRoleUpdate.role },
        });
        if (!foundRole) {
            throw new common_1.BadRequestException(`Role '${userRoleUpdate.role}' not found`);
        }
        userToUpdate.role = foundRole;
        const updatedUser = await this.userRepository.save(userToUpdate);
        return updatedUser;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.user)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map