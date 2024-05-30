import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(mail: string, name: string) {
    await this.mailerService.sendMail({
      to: mail,
      subject: "Bienvenido al sistema!",
      template: "./welcome",
      context: {
        name: name,
      },
    });
  }

  async sendProgramingInfoEmail(
    userEmail: string,
    pdfBuffer: Buffer
  ): Promise<void> {
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
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  }

  async sendRequestMailToUser(mail: string, name: string, brand:string,groupCode:string,programmingDescription:string,requestedDate:Date,start_time:Date) {
    await this.mailerService.sendMail({
      to: mail,
      subject: "Solicitud realizada",
      template: "./request",
      context: {
        name: name,
        brand:brand,
        groupCode:groupCode,
        programmingDescription:programmingDescription,
        requestedDate:requestedDate,
        start_time:start_time
      },
    });
  }
  
}
