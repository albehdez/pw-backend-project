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
exports.DriverCategoryController = void 0;
const common_1 = require("@nestjs/common");
const driver_category_service_1 = require("./driver_category.service");
const dto_1 = require("./dto");
const auth_decorador_1 = require("../common/decorators/auth.decorador");
const role_enum_1 = require("../common/enums/role.enum");
let DriverCategoryController = class DriverCategoryController {
    constructor(driver_category_service) {
        this.driver_category_service = driver_category_service;
    }
    get_drivers_category() {
        return this.driver_category_service.get_drivers_category();
    }
    get_driver_category(id) {
        return this.driver_category_service.get_driver_category(id);
    }
    create_driver_category(type_situation) {
        return this.driver_category_service.create_driver_category(type_situation);
    }
    delete_driver_category(id) {
        return this.driver_category_service.delete_driver_category(id);
    }
};
exports.DriverCategoryController = DriverCategoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverCategoryController.prototype, "get_drivers_category", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverCategoryController.prototype, "get_driver_category", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDriverCategoryDto]),
    __metadata("design:returntype", Promise)
], DriverCategoryController.prototype, "create_driver_category", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverCategoryController.prototype, "delete_driver_category", null);
exports.DriverCategoryController = DriverCategoryController = __decorate([
    (0, auth_decorador_1.Auth)([role_enum_1.Role.Manager, role_enum_1.Role.Admin]),
    (0, common_1.Controller)("driver-category"),
    __metadata("design:paramtypes", [driver_category_service_1.DriverCategoryService])
], DriverCategoryController);
//# sourceMappingURL=driver_category.controller.js.map