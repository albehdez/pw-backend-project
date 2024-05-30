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
exports.ChangeTypeController = void 0;
const common_1 = require("@nestjs/common");
const change_type_service_1 = require("./change_type.service");
const dto_1 = require("./dto");
const auth_decorador_1 = require("../common/decorators/auth.decorador");
const role_enum_1 = require("../common/enums/role.enum");
let ChangeTypeController = class ChangeTypeController {
    constructor(change_type_service) {
        this.change_type_service = change_type_service;
    }
    get_changes_type() {
        return this.change_type_service.get_changes_type();
    }
    get_change_type(id) {
        return this.change_type_service.get_change_type(id);
    }
    create_changes_type(createChangeTypeDto) {
        return this.change_type_service.create_change_type(createChangeTypeDto);
    }
    delete_changes_type(id) {
        return this.change_type_service.delete_change_type(id);
    }
};
exports.ChangeTypeController = ChangeTypeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChangeTypeController.prototype, "get_changes_type", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChangeTypeController.prototype, "get_change_type", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateChangeTypeDto]),
    __metadata("design:returntype", Promise)
], ChangeTypeController.prototype, "create_changes_type", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChangeTypeController.prototype, "delete_changes_type", null);
exports.ChangeTypeController = ChangeTypeController = __decorate([
    (0, auth_decorador_1.Auth)([role_enum_1.Role.Manager, role_enum_1.Role.Admin]),
    (0, common_1.Controller)("change-type"),
    __metadata("design:paramtypes", [change_type_service_1.ChangeTypeService])
], ChangeTypeController);
//# sourceMappingURL=change_type.controller.js.map