import { Injectable, NotFoundException } from "@nestjs/common";
import { vacation } from "./entities/vacation.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
const PDFDocument = require("pdfkit-table");


@Injectable()
export class VacationService {
  constructor(
    @InjectRepository(vacation)
    private readonly vacationRepository: Repository<vacation>,
  ) {}

  async get_drivers_vacation(): Promise<vacation[]> {
    return await this.vacationRepository.find({
        relations: ["driver", "situation"], 
      });
  }

  async get_driver_vacation(id: number): Promise<vacation> {
    const foundInside = await this.vacationRepository.findOne({
      where: { id },
      relations: ["situation", "driver"],
    });
    if (!foundInside) {
      throw new NotFoundException(`Driver with id ${id} not found`);
    }
    return foundInside;
  }

  async delete_driver_vacation(id: number): Promise<void> {
    const car_inside: vacation = await this.get_driver_vacation(id);
    await this.vacationRepository.delete(car_inside);
  }

  async generatePDF(): Promise<Buffer> {
    const drivers = await this.vacationRepository.find({
      relations: ["situation", "driver"],
    });

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: "LETTER",
        bufferPages: true,
        autoFirstPage: false,
      });

      let pageNumber = 0;
      doc.on("pageAdded", () => {
        pageNumber++;
        let bottom = doc.page.margins.bottom;

        if (pageNumber > 1) {
          doc
            .moveTo(50, 55)
            .lineTo(doc.page.width - 50, 55)
            .stroke();
        }

        doc.page.margins.bottom = 0;
        doc.font("Helvetica").fontSize(14);
        doc.text(
          "Pág. " + pageNumber,
          0.5 * (doc.page.width - 100),
          doc.page.height - 50,
          {
            width: 100,
            align: "center",
            lineBreak: false,
          }
        );
        doc.page.margins.bottom = bottom;
      });

      doc.addPage();
      doc.text("", 0, 400);
      doc.font("Helvetica-Bold").fontSize(24);
      doc.text("CubaTour", {
        width: doc.page.width,
        align: "center",
      });
      doc.moveDown();

      doc.addPage();
      doc.text("", 50, 70);
      doc.fontSize(24);
      doc.moveDown();
      doc.font("Helvetica").fontSize(20);

      // Preparar los datos de la tabla
      const rows = drivers.map((vacation) => [
        vacation.driver.name,
        vacation.driver.identify_card,
        vacation.return_date,
      ]);

      const table = {
        title: "Choferes de vacaciones",
        headers: ["Nombre", "Identificación", "Fecha de regreso"],
        rows: rows,
      };

      // Configurar el tamaño de las columnas según sea necesario
      doc.table(table, {
        columnsSize: [100, 100, 100],
      });

      const buffer = [];
      doc.on("data", buffer.push.bind(buffer));
      doc.on("end", () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
      doc.end();
    });

    return pdfBuffer;
  }
}
