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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
const dto_1 = require("./dto");
let CountryController = class CountryController {
    constructor(country_service) {
        this.country_service = country_service;
    }
    get_cars_situation() {
        return this.country_service.get_countrys();
    }
    get_car_situation(id) {
        return this.country_service.get_country(id);
    }
    create_car_situation(name) {
        return this.country_service.create_country(name);
    }
    delete_car_situation(id) {
        return this.country_service.delete_country(id);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "get_cars_situation", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "get_car_situation", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCountryDto]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "create_car_situation", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "delete_car_situation", null);
exports.CountryController = CountryController = __decorate([
    (0, common_1.Controller)('country'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map