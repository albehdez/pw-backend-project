"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverModule = void 0;
const common_1 = require("@nestjs/common");
const driver_controller_1 = require("./driver.controller");
const driver_service_1 = require("./driver.service");
const driver_entitty_1 = require("./entities/driver.entitty");
const typeorm_1 = require("@nestjs/typeorm");
const driver_situation_entity_1 = require("../driver_situation/entities/driver_situation.entity");
const entities_1 = require("../driver_category/entities");
const vacation_entity_1 = require("../vacation/entities/vacation.entity");
const entities_2 = require("../car/entities");
const entities_3 = require("../transport/entities");
let DriverModule = class DriverModule {
};
exports.DriverModule = DriverModule;
exports.DriverModule = DriverModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                driver_entitty_1.driver,
                driver_situation_entity_1.driver_situation,
                entities_1.driver_category,
                vacation_entity_1.vacation,
                entities_2.car,
                entities_3.transport,
            ]),
        ],
        controllers: [driver_controller_1.DriverController],
        providers: [driver_service_1.DriverService],
        exports: [driver_service_1.DriverService]
    })
], DriverModule);
//# sourceMappingURL=driver.module.js.map