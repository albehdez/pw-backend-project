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
exports.request = void 0;
const entities_1 = require("../../change/entities");
const entities_2 = require("../../programing/entities");
const entities_3 = require("../../request_transport/entities");
const entities_4 = require("../../roadmap/entities");
const entities_5 = require("../../roadmap_request/entities");
const entities_6 = require("../../transport/entities");
const entities_7 = require("../../turistic_group/entities");
const entities_8 = require("../../user/entities");
const typeorm_1 = require("typeorm");
let request = class request {
};
exports.request = request;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], request.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_7.turistic_group, (turistic_group) => turistic_group.request, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "id_turistic_group" }),
    __metadata("design:type", entities_7.turistic_group)
], request.prototype, "turistic_group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.programing, (programing) => programing.request, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "id_programing" }),
    __metadata("design:type", entities_2.programing)
], request.prototype, "programing", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_8.user, (user) => user.requests, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", entities_8.user)
], request.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], request.prototype, "request_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.change, (change) => change.request),
    __metadata("design:type", Array)
], request.prototype, "change", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_4.roadmap, (roadmap) => roadmap.requests),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], request.prototype, "roadmaps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_5.roadmap_request, (roadmap_request) => roadmap_request.request),
    __metadata("design:type", Array)
], request.prototype, "roadmap_request", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_6.transport, (transport) => transport.request),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], request.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_3.request_transport, (request_transport) => request_transport.request, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], request.prototype, "request_transport", void 0);
exports.request = request = __decorate([
    (0, typeorm_1.Entity)()
], request);
//# sourceMappingURL=request.entity.js.map