"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeModule = void 0;
const common_1 = require("@nestjs/common");
const change_service_1 = require("./change.service");
const change_controller_1 = require("./change.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const entities_2 = require("../change_type/entities");
const request_entity_1 = require("../request/entities/request.entity");
let ChangeModule = class ChangeModule {
};
exports.ChangeModule = ChangeModule;
exports.ChangeModule = ChangeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.change, entities_2.change_type, request_entity_1.request])],
        providers: [change_service_1.ChangeService],
        controllers: [change_controller_1.ChangeController],
    })
], ChangeModule);
//# sourceMappingURL=change.module.js.map