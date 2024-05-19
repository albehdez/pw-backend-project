/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { car } from '../car/entities';

import { inside } from './entities/inside.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const PDFDocument = require("pdfkit-table");
@Injectable()
export class InsideService {
    constructor(@InjectRepository(inside) private readonly insideRepository: Repository<inside>) {}

    async get_cars_inside(): Promise<inside[]> {
        return await this.insideRepository.find({ relations: ['car_situation','car'] });
    }

    async get_car_inside(id: number): Promise<inside> {
        const foundInside = await this.insideRepository.findOne({ where: { id },relations:['car_situation','car'] });
        if (!foundInside) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return foundInside;
    }

    async delete_car_inside(id: number): Promise<void> {
        const car_inside: inside = await this.get_car_inside(id);
        await this.insideRepository.delete(car_inside);
    }

    async generatePDF(): Promise<Buffer> {
        const cars = await this.insideRepository.find({
          relations: ['car_situation','car'],
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
          const rows = cars.map((insides) => [
            insides.car.license_plate,
            insides.car.brand,
            insides.return_date
          ]);
    
          const table = {
            title: "Veículos en el interior",
            headers: ["Matrícula", "Marca", "Fecha de regreso"],
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
