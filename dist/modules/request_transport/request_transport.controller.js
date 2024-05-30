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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTransportController = void 0;
const common_1 = require("@nestjs/common");
const request_transport_service_1 = require("./request_transport.service");
const auth_decorador_1 = require("../common/decorators/auth.decorador");
const role_enum_1 = require("../common/enums/role.enum");
let RequestTransportController = class RequestTransportController {
    constructor(request_transport_service) {
        this.request_transport_service = request_transport_service;
    }
    get_request_transports() {
        return this.request_transport_service.get_request_transports();
    }
    get_request_transport(id) {
        return this.request_transport_service.get_request_transport(id);
    }
    delete_request_transport(id) {
        return this.request_transport_service.delete_request_transport(id);
    }
};
exports.RequestTransportController = RequestTransportController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RequestTransportController.prototype, "get_request_transports", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequestTransportController.prototype, "get_request_transport", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequestTransportController.prototype, "delete_request_transport", null);
exports.RequestTransportController = RequestTransportController = __decorate([
    (0, auth_decorador_1.Auth)([role_enum_1.Role.Manager, role_enum_1.Role.Admin]),
    (0, common_1.Controller)("request-transport"),
    __metadata("design:paramtypes", [request_transport_service_1.RequestTransportService])
], RequestTransportController);
//# sourceMappingURL=request_transport.controller.js.map