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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const driver_service_1 = require("./driver.service");
const dto_1 = require("./dto");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    get_drivers() {
        return this.driverService.get_drivers();
    }
    get_driver(id) {
        return this.driverService.get_driver(id);
    }
    create_driver(createDriverDto) {
        return this.driverService.create_driver(createDriverDto);
    }
    update_driver(id, updateDriverDto) {
        return this.driverService.update_driver(id, updateDriverDto);
    }
    delete_driver(id) {
        return this.driverService.delete_driver(id);
    }
    async generatePDF(res) {
        const buffer = await this.driverService.generatePDF();
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=example.pdf",
            "Content-Length": buffer.length,
        });
        res.end(buffer);
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "get_drivers", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "get_driver", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDriverDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "create_driver", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateDriverDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "update_driver", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "delete_driver", null);
__decorate([
    (0, common_1.Get)("pdf/generate"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "generatePDF", null);
exports.DriverController = DriverController = __decorate([
    (0, common_1.Controller)("driver"),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
//# sourceMappingURL=driver.controller.js.map