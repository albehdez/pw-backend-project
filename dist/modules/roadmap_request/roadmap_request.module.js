"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadmapRequestModule = void 0;
const common_1 = require("@nestjs/common");
const roadmap_request_controller_1 = require("./roadmap_request.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../request/entities");
const entities_2 = require("../roadmap/entities");
const entities_3 = require("./entities");
const roadmap_request_service_1 = require("./roadmap_request.service");
let RoadmapRequestModule = class RoadmapRequestModule {
};
exports.RoadmapRequestModule = RoadmapRequestModule;
exports.RoadmapRequestModule = RoadmapRequestModule = __decorate([
    (0, common_1.Module)({
        imports: [
            RoadmapRequestModule,
            typeorm_1.TypeOrmModule.forFeature([entities_1.request, entities_2.roadmap, entities_3.roadmap_request]),
        ],
        controllers: [roadmap_request_controller_1.RoadmapRequestController],
        providers: [roadmap_request_service_1.RoadmapRequestService],
        exports: [roadmap_request_service_1.RoadmapRequestService],
    })
], RoadmapRequestModule);
//# sourceMappingURL=roadmap_request.module.js.map