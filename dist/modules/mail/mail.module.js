"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("./mail.service");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        exports: [mail_service_1.MailService],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mailer_1.MailerModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    console.log('MAIL_USER:', configService.get('MAIL_USER'));
                    console.log('MAIL_PASS:', configService.get('MAIL_PASS'));
                    return {
                        transport: {
                            host: 'smtp.gmail.com',
                            secure: false,
                            auth: {
                                user: 'pruebapwebwaldo@gmail.com',
                                pass: 'metxhmtymjhjdrrt',
                            },
                            tls: {
                                rejectUnauthorized: false,
                            },
                        },
                        defaults: {
                            from: `"No Reply" <pruebapwebwaldo@gmail.com>`,
                        },
                        template: {
                            dir: 'src/modules/mail/templates',
                            adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                            options: {
                                strict: true,
                            },
                        },
                    };
                },
            }),
        ],
        providers: [mail_service_1.MailService],
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map