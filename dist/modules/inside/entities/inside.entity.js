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
exports.inside = void 0;
const entities_1 = require("../../car_situation/entities");
const entities_2 = require("../../car/entities");
const typeorm_1 = require("typeorm");
let inside = class inside {
};
exports.inside = inside;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], inside.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], inside.prototype, "return_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.car_situation),
    (0, typeorm_1.JoinColumn)({ name: 'situation_id' }),
    __metadata("design:type", entities_1.car_situation)
], inside.prototype, "car_situation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_2.car, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'car_id' }),
    __metadata("design:type", entities_2.car)
], inside.prototype, "car", void 0);
exports.inside = inside = __decorate([
    (0, typeorm_1.Entity)()
], inside);
//# sourceMappingURL=inside.entity.js.map