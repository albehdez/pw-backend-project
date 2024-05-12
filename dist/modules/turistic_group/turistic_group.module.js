"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuristicGroupModule = void 0;
const common_1 = require("@nestjs/common");
const turistic_group_service_1 = require("./turistic_group.service");
const turistic_group_controller_1 = require("./turistic_group.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const entities_2 = require("../country/entities");
let TuristicGroupModule = class TuristicGroupModule {
};
exports.TuristicGroupModule = TuristicGroupModule;
exports.TuristicGroupModule = TuristicGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.turistic_group, entities_2.country])],
        providers: [turistic_group_service_1.TuristicGroupService],
        controllers: [turistic_group_controller_1.TuristicGroupController]
    })
], TuristicGroupModule);
//# sourceMappingURL=turistic_group.module.js.map