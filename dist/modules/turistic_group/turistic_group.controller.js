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
exports.TuristicGroupController = void 0;
const common_1 = require("@nestjs/common");
const turistic_group_service_1 = require("./turistic_group.service");
const dto_1 = require("./dto");
let TuristicGroupController = class TuristicGroupController {
    constructor(turistic_groupService) {
        this.turistic_groupService = turistic_groupService;
    }
    get_turistic_groups() {
        return this.turistic_groupService.get_turistic_groups();
    }
    get_turistic_group(id) {
        return this.turistic_groupService.get_turistic_group(id);
    }
    create_car(createTuristicGroupDto) {
        return this.turistic_groupService.create_turistic_group(createTuristicGroupDto);
    }
    update_car(id, updateTuristicGroupDto) {
        return this.turistic_groupService.update_turistic_group(id, updateTuristicGroupDto);
    }
    delete_car(id) {
        return this.turistic_groupService.delete_turistic_group(id);
    }
};
exports.TuristicGroupController = TuristicGroupController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TuristicGroupController.prototype, "get_turistic_groups", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TuristicGroupController.prototype, "get_turistic_group", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTuristicGroupDto]),
    __metadata("design:returntype", Promise)
], TuristicGroupController.prototype, "create_car", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateTuristicGroupDto]),
    __metadata("design:returntype", void 0)
], TuristicGroupController.prototype, "update_car", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TuristicGroupController.prototype, "delete_car", null);
exports.TuristicGroupController = TuristicGroupController = __decorate([
    (0, common_1.Controller)('turistic-group'),
    __metadata("design:paramtypes", [turistic_group_service_1.TuristicGroupService])
], TuristicGroupController);
//# sourceMappingURL=turistic_group.controller.js.map