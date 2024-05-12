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
exports.roadmap = void 0;
const entities_1 = require("../../car/entities");
const entities_2 = require("../../request/entities");
const entities_3 = require("../../roadmap_request/entities");
const typeorm_1 = require("typeorm");
let roadmap = class roadmap {
};
exports.roadmap = roadmap;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], roadmap.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], roadmap.prototype, "km_start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], roadmap.prototype, "km_end", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.car, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'car_id' }),
    __metadata("design:type", entities_1.car)
], roadmap.prototype, "car", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_2.request, request => request.roadmaps),
    __metadata("design:type", Array)
], roadmap.prototype, "requests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_3.roadmap_request, roadmap_request => roadmap_request.roadmap),
    __metadata("design:type", Array)
], roadmap.prototype, "roadmap_request", void 0);
exports.roadmap = roadmap = __decorate([
    (0, typeorm_1.Entity)()
], roadmap);
//# sourceMappingURL=roadmap.entity.js.map