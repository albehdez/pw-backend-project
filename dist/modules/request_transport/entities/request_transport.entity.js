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
exports.request_transport = void 0;
const entities_1 = require("../../request/entities");
const entities_2 = require("../../transport/entities");
const typeorm_1 = require("typeorm");
let request_transport = class request_transport {
};
exports.request_transport = request_transport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], request_transport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.request, request => request.request_transport),
    (0, typeorm_1.JoinColumn)({ name: 'request_id' }),
    __metadata("design:type", entities_1.request)
], request_transport.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.transport, transport => transport.request_transport),
    (0, typeorm_1.JoinColumn)({ name: 'trasnport_id' }),
    __metadata("design:type", entities_2.transport)
], request_transport.prototype, "transport", void 0);
exports.request_transport = request_transport = __decorate([
    (0, typeorm_1.Entity)()
], request_transport);
//# sourceMappingURL=request_transport.entity.js.map