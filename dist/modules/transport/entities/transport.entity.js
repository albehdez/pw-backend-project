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
exports.transport = void 0;
const entities_1 = require("../../car/entities");
const driver_entitty_1 = require("../../driver/entities/driver.entitty");
const entities_2 = require("../../request/entities");
const entities_3 = require("../../request_transport/entities");
const typeorm_1 = require("typeorm");
let transport = class transport {
};
exports.transport = transport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], transport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], transport.prototype, "is_copilot", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.car, (car) => car.transport),
    (0, typeorm_1.JoinColumn)({ name: "car_id" }),
    __metadata("design:type", entities_1.car)
], transport.prototype, "car", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => driver_entitty_1.driver, (driver) => driver.transport),
    (0, typeorm_1.JoinColumn)({ name: "driver_id" }),
    __metadata("design:type", driver_entitty_1.driver)
], transport.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_2.request, (request) => request.transport),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], transport.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_3.request_transport, (request_transport) => request_transport.request),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], transport.prototype, "request_transport", void 0);
exports.transport = transport = __decorate([
    (0, typeorm_1.Entity)()
], transport);
//# sourceMappingURL=transport.entity.js.map