import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendMail(mail: string, name: string) {
        await this.mailerService.sendMail({
            to: mail,
            subject: 'Bienvenido al sistema!',
            template: './welcome',
            context: {
                name: name,
            },
        });
    }


  
    async sendProgramingInfoEmail(userEmail: string, pdfBuffer: Buffer): Promise<void> {
        const mailOptions = {
          to: userEmail,
          subject: 'Información de Programaciones',
          template: './programing',
          attachments: [{
            filename: 'informacion_programaciones.pdf',
            content: pdfBuffer,
            type: 'application/pdf',
          }],
        };

        try {
          await this.mailerService.sendMail(mailOptions);
          console.log('Correo enviado exitosamente');
        } catch (error) {
          console.error('Error al enviar el correo:', error);
        }
    }
}
