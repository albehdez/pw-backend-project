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
exports.car_situation = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../car/entities");
const inside_entity_1 = require("../../inside/entities/inside.entity");
let car_situation = class car_situation {
};
exports.car_situation = car_situation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], car_situation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], car_situation.prototype, "type_situation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.car, car => car.car_situation),
    __metadata("design:type", Array)
], car_situation.prototype, "cars", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inside_entity_1.inside, inside => inside.car_situation),
    __metadata("design:type", Array)
], car_situation.prototype, "inside", void 0);
exports.car_situation = car_situation = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['type_situation'])
], car_situation);
//# sourceMappingURL=car_situation.entity.js.map