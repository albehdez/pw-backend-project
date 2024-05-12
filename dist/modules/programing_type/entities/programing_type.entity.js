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
exports.programing_type = void 0;
const entities_1 = require("../../programing/entities");
const typeorm_1 = require("typeorm");
let programing_type = class programing_type {
};
exports.programing_type = programing_type;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], programing_type.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], programing_type.prototype, "programing_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.programing, programing => programing.programing_type),
    __metadata("design:type", Array)
], programing_type.prototype, "programing", void 0);
exports.programing_type = programing_type = __decorate([
    (0, typeorm_1.Entity)()
], programing_type);
//# sourceMappingURL=programing_type.entity.js.map