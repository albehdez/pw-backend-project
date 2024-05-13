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
Object.defineProperty(exports, "__esModule", { value: true });
exports.driver_situation = void 0;
const driver_entitty_1 = require("../../driver/entities/driver.entitty");
const vacation_entity_1 = require("../../vacation/entities/vacation.entity");
const typeorm_1 = require("typeorm");
let driver_situation = class driver_situation {
};
exports.driver_situation = driver_situation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], driver_situation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], driver_situation.prototype, "type_situation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => driver_entitty_1.driver, driver => driver.driver_situation),
    __metadata("design:type", Array)
], driver_situation.prototype, "drivers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vacation_entity_1.vacation, vacation => vacation.situation),
    __metadata("design:type", Array)
], driver_situation.prototype, "vacation", void 0);
exports.driver_situation = driver_situation = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['type_situation'])
], driver_situation);
//# sourceMappingURL=driver_situation.entity.js.map