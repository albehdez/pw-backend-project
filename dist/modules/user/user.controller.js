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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const dto_1 = require("./dto");
const role_enum_1 = require("../auth/enums/role.enum");
const auth_decorator_1 = require("../auth/decoradors/auth.decorator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create_user(user) {
        return this.userService.create_user(user);
    }
    get_users() {
        return this.userService.get_users();
    }
    get_user(id) {
        return this.userService.get_user(id);
    }
    findOneByEmail(email) {
        return this.userService.findOneByEmail(email);
    }
    updateUser(email, updateUserDto) {
        return this.userService.update_user(email, updateUserDto);
    }
    update_user_role(id, updateUserRoleDto) {
        return this.userService.update_user_role(id, updateUserRoleDto);
    }
    delete_user(email) {
        return this.userService.delete_user(email);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create_user", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get_users", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get_user", null);
__decorate([
    (0, common_1.Get)("email/:email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneByEmail", null);
__decorate([
    (0, common_1.Patch)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, auth_decorator_1.Auth)(role_enum_1.Role.Admin),
    (0, common_1.Patch)("role/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateUserRoleDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update_user_role", null);
__decorate([
    (0, common_1.Delete)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete_user", null);
exports.UserController = UserController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map