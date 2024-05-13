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
exports.user = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../../role/entities/role.entity");
const entities_1 = require("../../request/entities");
let user = class user {
};
exports.user = user;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], user.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], user.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], user.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], user.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.role, (user_role) => user_role.users, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "role_id" }),
    __metadata("design:type", role_entity_1.role)
], user.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.request, request => request.user),
    __metadata("design:type", Array)
], user.prototype, "requests", void 0);
exports.user = user = __decorate([
    (0, typeorm_1.Entity)()
], user);
//# sourceMappingURL=user.entity.js.map