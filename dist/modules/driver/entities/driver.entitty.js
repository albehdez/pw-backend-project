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
exports.driver = void 0;
const entities_1 = require("../../car/entities");
const entities_2 = require("../../driver_category/entities");
const driver_situation_entity_1 = require("../../driver_situation/entities/driver_situation.entity");
const entities_3 = require("../../transport/entities");
const vacation_entity_1 = require("../../vacation/entities/vacation.entity");
const typeorm_1 = require("typeorm");
let driver = class driver {
};
exports.driver = driver;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], driver.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], driver.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], driver.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], driver.prototype, "identify_card", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], driver.prototype, "permanent_car", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => driver_situation_entity_1.driver_situation, (driver_situation) => driver_situation.drivers, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "driver_situation_id" }),
    __metadata("design:type", driver_situation_entity_1.driver_situation)
], driver.prototype, "driver_situation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.driver_category, (driver_category) => driver_category.drivers, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "category_id" }),
    __metadata("design:type", entities_2.driver_category)
], driver.prototype, "driver_category", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => vacation_entity_1.vacation, (vacation) => vacation.driver),
    __metadata("design:type", Array)
], driver.prototype, "vacation", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_1.car, (car) => car.drivers),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], driver.prototype, "cars", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_3.transport, (transport) => transport.driver),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], driver.prototype, "transport", void 0);
exports.driver = driver = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["identify_card"]),
    (0, typeorm_1.Unique)(["permanent_car"])
], driver);
//# sourceMappingURL=driver.entitty.js.map