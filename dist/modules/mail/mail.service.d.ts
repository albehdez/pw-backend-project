/// <reference types="node" />
import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(mail: string, name: string): Promise<void>;
    sendProgramingInfoEmail(userEmail: string, pdfBuffer: Buffer): Promise<void>;
}
