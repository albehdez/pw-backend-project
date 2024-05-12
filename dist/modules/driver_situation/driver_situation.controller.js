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
exports.DriverSituationController = void 0;
const common_1 = require("@nestjs/common");
const driver_situation_service_1 = require("./driver_situation.service");
const dto_1 = require("../car_situation/dto");
let DriverSituationController = class DriverSituationController {
    constructor(driver_situation_service) {
        this.driver_situation_service = driver_situation_service;
    }
    get_drivers_situation() {
        return this.driver_situation_service.get_drivers_situation();
    }
    get_driver_situation(id) {
        return this.driver_situation_service.get_driver_situation(id);
    }
    create_driver_situation(type_situation) {
        return this.driver_situation_service.create_driver_situation(type_situation);
    }
    delete_driver_situation(id) {
        return this.driver_situation_service.delete_driver_situation(id);
    }
};
exports.DriverSituationController = DriverSituationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverSituationController.prototype, "get_drivers_situation", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverSituationController.prototype, "get_driver_situation", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCarSituationDto]),
    __metadata("design:returntype", Promise)
], DriverSituationController.prototype, "create_driver_situation", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverSituationController.prototype, "delete_driver_situation", null);
exports.DriverSituationController = DriverSituationController = __decorate([
    (0, common_1.Controller)('driver-situation'),
    __metadata("design:paramtypes", [driver_situation_service_1.DriverSituationService])
], DriverSituationController);
//# sourceMappingURL=driver_situation.controller.js.map