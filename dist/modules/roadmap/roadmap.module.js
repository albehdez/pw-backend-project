"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadmapModule = void 0;
const common_1 = require("@nestjs/common");
const roadmap_service_1 = require("./roadmap.service");
const roadmap_controller_1 = require("./roadmap.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const entities_2 = require("../car/entities");
let RoadmapModule = class RoadmapModule {
};
exports.RoadmapModule = RoadmapModule;
exports.RoadmapModule = RoadmapModule = __decorate([
    (0, common_1.Module)({
        providers: [roadmap_service_1.RoadmapService],
        controllers: [roadmap_controller_1.RoadmapController],
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.roadmap, entities_2.car])],
    })
], RoadmapModule);
//# sourceMappingURL=roadmap.module.js.map