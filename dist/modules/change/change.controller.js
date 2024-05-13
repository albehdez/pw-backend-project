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
exports.ChangeController = void 0;
const common_1 = require("@nestjs/common");
const change_service_1 = require("./change.service");
const dto_1 = require("./dto");
let ChangeController = class ChangeController {
    constructor(changeService) {
        this.changeService = changeService;
    }
    get_changes() {
        return this.changeService.get_changes();
    }
    get_change(id) {
        return this.changeService.get_change(id);
    }
    create_change(createChangeDto) {
        return this.changeService.create_change(createChangeDto);
    }
    delete_change(id) {
        return this.changeService.delete_change(id);
    }
};
exports.ChangeController = ChangeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChangeController.prototype, "get_changes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChangeController.prototype, "get_change", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateChangeDto]),
    __metadata("design:returntype", Promise)
], ChangeController.prototype, "create_change", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChangeController.prototype, "delete_change", null);
exports.ChangeController = ChangeController = __decorate([
    (0, common_1.Controller)('change'),
    __metadata("design:paramtypes", [change_service_1.ChangeService])
], ChangeController);
//# sourceMappingURL=change.controller.js.map