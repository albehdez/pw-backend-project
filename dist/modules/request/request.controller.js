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
exports.RequestController = void 0;
const common_1 = require("@nestjs/common");
const request_service_1 = require("./request.service");
const dto_1 = require("../transport/dto");
const dto_2 = require("./dto");
const auth_decorador_1 = require("../common/decorators/auth.decorador");
const role_enum_1 = require("../common/enums/role.enum");
let RequestController = class RequestController {
    constructor(requestService) {
        this.requestService = requestService;
    }
    get_requests() {
        return this.requestService.get_requests();
    }
    get_request(id) {
        return this.requestService.get_request(id);
    }
    create_request(createrequestDto, createtransportDto) {
        return this.requestService.create_request(createrequestDto);
    }
    update_request(id, updateRequestDto) {
        return this.requestService.update_request(id, updateRequestDto);
    }
    delete_request(id) {
        return this.requestService.delete_request(id);
    }
};
exports.RequestController = RequestController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "get_requests", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "get_request", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.CreateRequestDto,
        dto_1.CreateTransportDto]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "create_request", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_2.UpdateRequestDto]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "update_request", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "delete_request", null);
exports.RequestController = RequestController = __decorate([
    (0, auth_decorador_1.Auth)([role_enum_1.Role.Manager, role_enum_1.Role.Admin]),
    (0, common_1.Controller)("request"),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], RequestController);
//# sourceMappingURL=request.controller.js.map