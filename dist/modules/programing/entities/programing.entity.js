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
exports.programing = void 0;
const programing_type_entity_1 = require("../../programing_type/entities/programing_type.entity");
const entities_1 = require("../../request/entities");
const typeorm_1 = require("typeorm");
let programing = class programing {
};
exports.programing = programing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], programing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => programing_type_entity_1.programing_type, (programing_type) => programing_type.programing, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'programing_type_id' }),
    __metadata("design:type", programing_type_entity_1.programing_type)
], programing.prototype, "programing_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], programing.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], programing.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], programing.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], programing.prototype, "km_to_travel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], programing.prototype, "delay", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.request, (request) => request.group),
    __metadata("design:type", Array)
], programing.prototype, "request", void 0);
exports.programing = programing = __decorate([
    (0, typeorm_1.Entity)()
], programing);
//# sourceMappingURL=programing.entity.js.map