"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramingTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const programing_type_controller_1 = require("./programing_type.controller");
const programing_type_service_1 = require("./programing_type.service");
let ProgramingTypeModule = class ProgramingTypeModule {
};
exports.ProgramingTypeModule = ProgramingTypeModule;
exports.ProgramingTypeModule = ProgramingTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.programing_type])],
        controllers: [programing_type_controller_1.ProgramingTypeController],
        providers: [programing_type_service_1.ProgramingTypeService]
    })
], ProgramingTypeModule);
//# sourceMappingURL=programing_type.module.js.map