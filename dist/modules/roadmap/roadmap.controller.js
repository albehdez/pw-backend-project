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
exports.RoadmapController = void 0;
const common_1 = require("@nestjs/common");
const roadmap_service_1 = require("./roadmap.service");
const dto_1 = require("./dto");
const role_enum_1 = require("../common/enums/role.enum");
const auth_decorador_1 = require("../common/decorators/auth.decorador");
let RoadmapController = class RoadmapController {
    constructor(roadmapService) {
        this.roadmapService = roadmapService;
    }
    get_raodmaps() {
        return this.roadmapService.get_raodmaps();
    }
    get_raodmap(id) {
        return this.roadmapService.get_raodmap(id);
    }
    create_roadmap(createCarDto) {
        return this.roadmapService.create_roadmap(createCarDto);
    }
    delete_roadmap(id) {
        return this.roadmapService.delete_roadmap(id);
    }
};
exports.RoadmapController = RoadmapController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoadmapController.prototype, "get_raodmaps", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoadmapController.prototype, "get_raodmap", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateRoadmapDto]),
    __metadata("design:returntype", Promise)
], RoadmapController.prototype, "create_roadmap", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoadmapController.prototype, "delete_roadmap", null);
exports.RoadmapController = RoadmapController = __decorate([
    (0, auth_decorador_1.Auth)([role_enum_1.Role.Manager, role_enum_1.Role.Admin]),
    (0, common_1.Controller)("roadmap"),
    __metadata("design:paramtypes", [roadmap_service_1.RoadmapService])
], RoadmapController);
//# sourceMappingURL=roadmap.controller.js.map