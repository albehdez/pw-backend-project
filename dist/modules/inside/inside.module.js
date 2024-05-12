"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsideModule = void 0;
const common_1 = require("@nestjs/common");
const car_entity_1 = require("../car/entities/car.entity");
const car_situation_entity_1 = require("../car_situation/entities/car_situation.entity");
const inside_entity_1 = require("./entities/inside.entity");
const inside_controller_1 = require("./inside.controller");
const inside_service_1 = require("./inside.service");
const typeorm_1 = require("@nestjs/typeorm");
let InsideModule = class InsideModule {
};
exports.InsideModule = InsideModule;
exports.InsideModule = InsideModule = __decorate([
    (0, common_1.Module)({
        imports: [InsideModule, typeorm_1.TypeOrmModule.forFeature([car_entity_1.car, car_situation_entity_1.car_situation, inside_entity_1.inside])],
        controllers: [inside_controller_1.InsideController],
        providers: [inside_service_1.InsideService]
    })
], InsideModule);
//# sourceMappingURL=inside.module.js.map