"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSituationModule = void 0;
const common_1 = require("@nestjs/common");
const car_situation_service_1 = require("./car_situation.service");
const car_situation_controller_1 = require("./car_situation.controller");
const typeorm_1 = require("@nestjs/typeorm");
const car_situation_entity_1 = require("./entities/car_situation.entity");
let CarSituationModule = class CarSituationModule {
};
exports.CarSituationModule = CarSituationModule;
exports.CarSituationModule = CarSituationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([car_situation_entity_1.car_situation])],
        controllers: [car_situation_controller_1.CarSituationController],
        providers: [car_situation_service_1.CarSituationService]
    })
], CarSituationModule);
//# sourceMappingURL=car_situation.module.js.map