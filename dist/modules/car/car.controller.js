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
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const car_service_1 = require("./car.service");
const dto_1 = require("./dto");
const auth_decorador_1 = require("../common/decorators/auth.decorador");
const role_enum_1 = require("../common/enums/role.enum");
let CarController = class CarController {
    constructor(carService) {
        this.carService = carService;
    }
    get_cars() {
        return this.carService.get_cars();
    }
    get_cars_available(date) {
        return this.carService.getCarsAvailableAndInTransport(date);
    }
    get_cars_simple() {
        return this.carService.get_cars_simple();
    }
    get_car(id) {
        return this.carService.get_car(id);
    }
    get_car_simple(id) {
        return this.carService.get_car_simple(id);
    }
    create_car(createCarDto) {
        return this.carService.create_car(createCarDto);
    }
    update_car(id, updateCarDto) {
        return this.carService.update_car(id, updateCarDto);
    }
    delete_car(id) {
        return this.carService.delete_car(id);
    }
    async generatePDF(res) {
        const buffer = await this.carService.generatePDF();
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=example.pdf",
            "Content-Length": buffer.length,
        });
        res.end(buffer);
    }
};
exports.CarController = CarController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "get_cars", null);
__decorate([
    (0, common_1.Get)("available"),
    __param(0, (0, common_1.Body)("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "get_cars_available", null);
__decorate([
    (0, common_1.Get)("simple"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "get_cars_simple", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "get_car", null);
__decorate([
    (0, common_1.Get)("simple/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "get_car_simple", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create_car", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateCarDto]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "update_car", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "delete_car", null);
__decorate([
    (0, common_1.Get)("pdf/generate"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "generatePDF", null);
exports.CarController = CarController = __decorate([
    (0, auth_decorador_1.Auth)([role_enum_1.Role.Manager, role_enum_1.Role.Admin]),
    (0, common_1.Controller)("car"),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
//# sourceMappingURL=car.controller.js.map