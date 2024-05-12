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
exports.DriverCategoryService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("./entities");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DriverCategoryService = class DriverCategoryService {
    constructor(driver_category_repository) {
        this.driver_category_repository = driver_category_repository;
    }
    async get_drivers_category() {
        return await this.driver_category_repository.find();
    }
    async get_driver_category(id) {
        const driver_category = await this.driver_category_repository.findOne({ where: { id } });
        ;
        if (!driver_category) {
            throw new common_1.NotFoundException(`driver_category with id ${id} not found`);
        }
        return driver_category;
    }
    async create_driver_category({ type_category }) {
        const driver_situation = this.driver_category_repository.create({
            type_category
        });
        return this.driver_category_repository.save(driver_situation);
    }
    async delete_driver_category(id) {
        const driver_situation = await this.get_driver_category(id);
        await this.driver_category_repository.delete(driver_situation);
    }
};
exports.DriverCategoryService = DriverCategoryService;
exports.DriverCategoryService = DriverCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.driver_category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DriverCategoryService);
//# sourceMappingURL=driver_category.service.js.map