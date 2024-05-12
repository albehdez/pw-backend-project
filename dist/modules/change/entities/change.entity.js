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
exports.change = void 0;
const entities_1 = require("../../change_type/entities");
const request_entity_1 = require("../../request/entities/request.entity");
const typeorm_1 = require("typeorm");
let change = class change {
};
exports.change = change;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], change.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.change_type, (change_type) => change_type.change, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'change_type_id' }),
    __metadata("design:type", entities_1.change_type)
], change.prototype, "change_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], change.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => request_entity_1.request, (request) => request.change, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'request_id' }),
    __metadata("design:type", request_entity_1.request)
], change.prototype, "request", void 0);
exports.change = change = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['id', 'change_type', 'description'])
], change);
//# sourceMappingURL=change.entity.js.map