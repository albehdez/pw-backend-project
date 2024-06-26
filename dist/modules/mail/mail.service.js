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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendMail(mail, name) {
        await this.mailerService.sendMail({
            to: mail,
            subject: "Bienvenido al sistema!",
            template: "./welcome",
            context: {
                name: name,
            },
        });
    }
    async sendProgramingInfoEmail(userEmail, pdfBuffer) {
        const mailOptions = {
            to: userEmail,
            subject: "Información de Programaciones",
            template: "./programing",
            attachments: [
                {
                    filename: "informacion_programaciones.pdf",
                    content: pdfBuffer,
                    type: "application/pdf",
                },
            ],
        };
        try {
            await this.mailerService.sendMail(mailOptions);
            console.log("Correo enviado exitosamente");
        }
        catch (error) {
            console.error("Error al enviar el correo:", error);
        }
    }
    async sendRequestMailToUser(mail, name, brand, groupCode, programmingDescription, requestedDate, start_time) {
        await this.mailerService.sendMail({
            to: mail,
            subject: "Solicitud realizada",
            template: "./request",
            context: {
                name: name,
                brand: brand,
                groupCode: groupCode,
                programmingDescription: programmingDescription,
                requestedDate: requestedDate,
                start_time: start_time
            },
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map