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
exports.car = void 0;
const typeorm_1 = require("typeorm");
const car_situation_entity_1 = require("../../car_situation/entities/car_situation.entity");
const inside_entity_1 = require("../../inside/entities/inside.entity");
const driver_entitty_1 = require("../../driver/entities/driver.entitty");
const entities_1 = require("../../transport/entities");
const entities_2 = require("../../roadmap/entities");
let car = class car {
};
exports.car = car;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], car.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], car.prototype, "number_seats", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], car.prototype, "km_available", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], car.prototype, "license_plate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => car_situation_entity_1.car_situation, (car_situation) => car_situation.cars, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "car_situation_id" }),
    __metadata("design:type", car_situation_entity_1.car_situation)
], car.prototype, "car_situation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => inside_entity_1.inside, (inside) => inside.car),
    __metadata("design:type", inside_entity_1.inside)
], car.prototype, "inside", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => driver_entitty_1.driver, (driver) => driver.cars),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], car.prototype, "drivers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.transport, (transport) => transport.car),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], car.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_2.roadmap, (roadmap) => roadmap.car),
    __metadata("design:type", Array)
], car.prototype, "roadmap", void 0);
exports.car = car = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["license_plate"])
], car);
//# sourceMappingURL=car.entity.js.map