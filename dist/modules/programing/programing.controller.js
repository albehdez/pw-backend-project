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
exports.ProgramingController = void 0;
const common_1 = require("@nestjs/common");
const programing_service_1 = require("./programing.service");
const dto_1 = require("./dto");
let ProgramingController = class ProgramingController {
    constructor(programingService) {
        this.programingService = programingService;
    }
    get_programings() {
        return this.programingService.get_programings();
    }
    get_programing(id) {
        return this.programingService.get_programing(id);
    }
    create_programing(createProgramingDto) {
        return this.programingService.create_programing(createProgramingDto);
    }
    update_programing(id, updateProgramingDto) {
        return this.programingService.update_programing(id, updateProgramingDto);
    }
    delete_programing(id) {
        return this.programingService.delete_programing(id);
    }
    async generatePDF(res) {
        const buffer = await this.programingService.generatePDF();
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=example.pdf",
            "Content-Length": buffer.length,
        });
        res.end(buffer);
    }
    async sendProgramingInfoByEmail(userEmail) {
        await this.programingService.sendProgramingInfoEmailAndGeneratePdf(userEmail);
    }
};
exports.ProgramingController = ProgramingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProgramingController.prototype, "get_programings", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProgramingController.prototype, "get_programing", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProgramingDto]),
    __metadata("design:returntype", Promise)
], ProgramingController.prototype, "create_programing", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateProgramingDto]),
    __metadata("design:returntype", void 0)
], ProgramingController.prototype, "update_programing", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProgramingController.prototype, "delete_programing", null);
__decorate([
    (0, common_1.Get)("pdf/generate"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProgramingController.prototype, "generatePDF", null);
__decorate([
    (0, common_1.Post)("email"),
    __param(0, (0, common_1.Body)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProgramingController.prototype, "sendProgramingInfoByEmail", null);
exports.ProgramingController = ProgramingController = __decorate([
    (0, common_1.Controller)("programing"),
    __metadata("design:paramtypes", [programing_service_1.ProgramingService])
], ProgramingController);
//# sourceMappingURL=programing.controller.js.map