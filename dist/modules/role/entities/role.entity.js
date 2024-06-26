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
exports.role = void 0;
const role_enum_1 = require("../../common/enums/role.enum");
const entities_1 = require("../../user/entities");
const typeorm_1 = require("typeorm");
let role = class role {
};
exports.role = role;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: role_enum_1.Role }),
    __metadata("design:type", String)
], role.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.user, user => user.role),
    __metadata("design:type", Array)
], role.prototype, "users", void 0);
exports.role = role = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['role'])
], role);
//# sourceMappingURL=role.entity.js.map