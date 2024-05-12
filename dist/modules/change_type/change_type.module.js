"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const change_type_controller_1 = require("./change_type.controller");
const change_type_service_1 = require("./change_type.service");
let ChangeTypeModule = class ChangeTypeModule {
};
exports.ChangeTypeModule = ChangeTypeModule;
exports.ChangeTypeModule = ChangeTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.change_type])],
        controllers: [change_type_controller_1.ChangeTypeController],
        providers: [change_type_service_1.ChangeTypeService]
    })
], ChangeTypeModule);
//# sourceMappingURL=change_type.module.js.map