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
exports.TuristicGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../country/entities");
const entities_2 = require("./entities");
let TuristicGroupService = class TuristicGroupService {
    constructor(turistic_groupRepository, countryRepository) {
        this.turistic_groupRepository = turistic_groupRepository;
        this.countryRepository = countryRepository;
    }
    async get_turistic_groups() {
        return await this.turistic_groupRepository.find({ relations: ["country"] });
    }
    async get_turistic_group(id) {
        const turistic_group = await this.turistic_groupRepository.findOne({ where: { id }, relations: ['country'] });
        if (!turistic_group) {
            throw new common_1.NotFoundException(`Turistic Group with id ${id} not found`);
        }
        return turistic_group;
    }
    async create_turistic_group({ number_turist, country }) {
        const foundCountry = await this.countryRepository.findOne({ where: { name: country.name } });
        if (!foundCountry) {
            throw new common_1.NotFoundException(`Country with name ${country.name} not found`);
        }
        let cityInitials = foundCountry.name.slice(0, 3).toUpperCase();
        let randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
        let id_group = `${cityInitials}${number_turist}${randomNumbers}`;
        let uniqueIdGroup = false;
        while (!uniqueIdGroup) {
            const existingGroup = await this.turistic_groupRepository.findOne({ where: { id_group } });
            if (existingGroup) {
                randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
                id_group = `${cityInitials}${number_turist}${randomNumbers}`;
            }
            else {
                uniqueIdGroup = true;
            }
        }
        const newTuristic_group = this.turistic_groupRepository.create({ id_group, number_turist, country: foundCountry });
        const savedTuristic_group = await this.turistic_groupRepository.save(newTuristic_group);
        return savedTuristic_group;
    }
    async update_turistic_group(id, { number_turist, country }) {
        const turistic_groupToUpdate = await this.get_turistic_group(id);
        if (!turistic_groupToUpdate) {
            throw new common_1.NotFoundException(`Turistic Group with id ${id} not found`);
        }
        if (country) {
            const foundCountry = await this.countryRepository.findOne({ where: { name: country.name } });
            if (!foundCountry) {
                throw new common_1.NotFoundException(`Country with name ${country.name} not found`);
            }
            turistic_groupToUpdate.country = foundCountry;
        }
        if (number_turist) {
            turistic_groupToUpdate.number_turist = number_turist;
        }
        let cityInitials = turistic_groupToUpdate.country.name.slice(0, 3).toUpperCase();
        let randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
        let newGroupId = `${cityInitials}${turistic_groupToUpdate.number_turist}${randomNumbers}`;
        let uniqueGroupId = false;
        while (!uniqueGroupId) {
            const existingGroup = await this.turistic_groupRepository.findOne({ where: { id_group: newGroupId } });
            if (existingGroup && existingGroup.id !== turistic_groupToUpdate.id) {
                randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
                newGroupId = `${cityInitials}${turistic_groupToUpdate.number_turist}${randomNumbers}`;
            }
            else {
                uniqueGroupId = true;
            }
        }
        turistic_groupToUpdate.id_group = newGroupId;
        const updateTuristicGroup = await this.turistic_groupRepository.save(turistic_groupToUpdate);
        return updateTuristicGroup;
    }
    async delete_turistic_group(id) {
        const turistic_groupToDelete = await this.turistic_groupRepository.findOne({ where: { id } });
        if (!turistic_groupToDelete) {
            throw new common_1.NotFoundException(`Turistic Group with id ${id} not found`);
        }
        await this.turistic_groupRepository.remove(turistic_groupToDelete);
    }
};
exports.TuristicGroupService = TuristicGroupService;
exports.TuristicGroupService = TuristicGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_2.turistic_group)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.country)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], TuristicGroupService);
//# sourceMappingURL=turistic_group.service.js.map