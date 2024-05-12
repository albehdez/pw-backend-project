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
const entities_2 = require("../../request_transport/entities");
const entities_3 = require("../../roadmap/entities");
const entities_4 = require("../../roadmap_request/entities");
const entities_5 = require("../../transport/entities");
const typeorm_1 = require("typeorm");
let request = class request {
};
exports.request = request;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], request.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.change, change => change.request),
    (0, typeorm_1.JoinColumn)({ name: "change_id" }),
    __metadata("design:type", Array)
], request.prototype, "change", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_3.roadmap, roadmap => roadmap.requests),
    __metadata("design:type", Array)
], request.prototype, "roadmaps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_4.roadmap_request, roadmap_request => roadmap_request.request),
    __metadata("design:type", Array)
], request.prototype, "roadmap_request", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_5.transport, transport => transport.request),
    __metadata("design:type", Array)
], request.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_2.request_transport, request_transport => request_transport.request),
    __metadata("design:type", Array)
], request.prototype, "request_transport", void 0);
exports.request = request = __decorate([
    (0, typeorm_1.Entity)()
], request);
//# sourceMappingURL=request.entity.js.map