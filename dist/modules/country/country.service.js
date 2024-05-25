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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
let CountryService = class CountryService {
    constructor(country_repository) {
        this.country_repository = country_repository;
    }
    async get_countrys() {
        return await this.country_repository.find();
    }
    async get_country(id) {
        const country = await this.country_repository.findOne({ where: { id } });
        if (!country) {
            throw new common_1.NotFoundException(`Country with id ${id} not found`);
        }
        return country;
    }
    async create_country({ name }) {
        const foundCountry = await this.country_repository.findOne({ where: { name: name } });
        if (!foundCountry) {
            throw new common_1.NotFoundException(`Country with name ${name} not found`);
        }
        const country = this.country_repository.create({
            name
        });
        return this.country_repository.save(country);
    }
    async delete_country(id) {
        const country = await this.get_country(id);
        await this.country_repository.delete(country);
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.country)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountryService);
//# sourceMappingURL=country.service.js.map