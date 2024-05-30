/// <reference types="node" />
import { MailerService } from "@nestjs-modules/mailer";
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(mail: string, name: string): Promise<void>;
    sendProgramingInfoEmail(userEmail: string, pdfBuffer: Buffer): Promise<void>;
    sendRequestMailToUser(mail: string, name: string, brand: string, groupCode: string, programmingDescription: string, requestedDate: Date, start_time: Date): Promise<void>;
}
