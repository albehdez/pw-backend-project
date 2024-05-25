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
exports.turistic_group = void 0;
const entities_1 = require("../../country/entities");
const entities_2 = require("../../request/entities");
const typeorm_1 = require("typeorm");
let turistic_group = class turistic_group {
};
exports.turistic_group = turistic_group;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], turistic_group.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], turistic_group.prototype, "id_group", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], turistic_group.prototype, "number_turist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.country, (country) => country.turistic_group, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "country_id" }),
    __metadata("design:type", entities_1.country)
], turistic_group.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_2.request, (request) => request.group),
    __metadata("design:type", Array)
], turistic_group.prototype, "request", void 0);
exports.turistic_group = turistic_group = __decorate([
    (0, typeorm_1.Entity)()
], turistic_group);
//# sourceMappingURL=turistic_group.entity.js.map