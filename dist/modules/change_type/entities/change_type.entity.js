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
exports.change_type = void 0;
const change_entity_1 = require("../../change/entities/change.entity");
const typeorm_1 = require("typeorm");
let change_type = class change_type {
};
exports.change_type = change_type;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], change_type.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], change_type.prototype, "change_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => change_entity_1.change, change => change.change_type),
    __metadata("design:type", Array)
], change_type.prototype, "change", void 0);
exports.change_type = change_type = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['change_type'])
], change_type);
//# sourceMappingURL=change_type.entity.js.map