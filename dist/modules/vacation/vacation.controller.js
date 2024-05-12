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
exports.VacationController = void 0;
const common_1 = require("@nestjs/common");
const vacation_service_1 = require("./vacation.service");
let VacationController = class VacationController {
    constructor(vacation_service) {
        this.vacation_service = vacation_service;
    }
    get_drivers_vacation() {
        return this.vacation_service.get_drivers_vacation();
    }
    get_driver_vacation(id) {
        return this.vacation_service.get_driver_vacation(id);
    }
    delete_driver_vacation(id) {
        return this.vacation_service.delete_driver_vacation(id);
    }
};
exports.VacationController = VacationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VacationController.prototype, "get_drivers_vacation", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VacationController.prototype, "get_driver_vacation", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VacationController.prototype, "delete_driver_vacation", null);
exports.VacationController = VacationController = __decorate([
    (0, common_1.Controller)('vacation'),
    __metadata("design:paramtypes", [vacation_service_1.VacationService])
], VacationController);
//# sourceMappingURL=vacation.controller.js.map