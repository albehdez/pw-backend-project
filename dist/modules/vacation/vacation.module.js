"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacationModule = void 0;
const common_1 = require("@nestjs/common");
const vacation_controller_1 = require("./vacation.controller");
const vacation_service_1 = require("./vacation.service");
const vacation_entity_1 = require("./entities/vacation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const driver_entitty_1 = require("../driver/entities/driver.entitty");
const driver_situation_entity_1 = require("../driver_situation/entities/driver_situation.entity");
let VacationModule = class VacationModule {
};
exports.VacationModule = VacationModule;
exports.VacationModule = VacationModule = __decorate([
    (0, common_1.Module)({
        imports: [VacationModule, typeorm_1.TypeOrmModule.forFeature([driver_entitty_1.driver, driver_situation_entity_1.driver_situation, vacation_entity_1.vacation])],
        controllers: [vacation_controller_1.VacationController],
        providers: [vacation_service_1.VacationService]
    })
], VacationModule);
//# sourceMappingURL=vacation.module.js.map