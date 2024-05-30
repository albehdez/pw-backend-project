/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { car } from "./entities/car.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarDto, UpdateCarDto } from "./dto";
import { car_situation } from "../car_situation/entities";
import { inside } from "../inside/entities/inside.entity";
import { elementAt } from "rxjs";
//import * as PDFDocument from 'pdfkit';
//import * as fs from "fs";
const PDFDocument = require("pdfkit-table");

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(car) private readonly carRepository: Repository<car>,
    @InjectRepository(car_situation)
    private readonly car_situationRepository: Repository<car_situation>,
    @InjectRepository(inside)
    private readonly insideRepository: Repository<inside>
  ) {}

  async get_cars(): Promise<car[]> {
    return await this.carRepository.find({
      relations: ["car_situation", "inside"],
    });
  }

  async getCarsAvailableAndInTransport(date: Date): Promise<car[]> {
    const cars = await this.carRepository.find({
      where: { car_situation: { type_situation: "Available" } },
    });

    const filteredCarsPromises = cars.map(async (car) => {      
      const hasTransports = car.transport && car.transport.length > 0;

      
      if (hasTransports) {
        let foundCar = false;
        for (const transport of car.transport) {
          for (const request of transport.request) {
            if (new Date(request.request_date).getTime() === date.getTime()) {
              foundCar = true;
              break;
            }
          }
          if (foundCar) break;
        }
        return foundCar ? null : car;
      }

     
      return car;
    });

    const filteredCars = await Promise.all(filteredCarsPromises);
    const availableCars = filteredCars.filter((car) => car !== null); 

    return availableCars;
  }

  async get_cars_simple(): Promise<
    {
      brand: string;
      number_seats: number;
      km_available: number;
      license_plate: string;
      car_situation: string;
    }[]
  > {
    const cars = await this.carRepository.find({
      relations: ["car_situation"],
    });
    return cars.map((car) => ({
      brand: car.brand,
      number_seats: car.number_seats,
      km_available: car.km_available,
      license_plate: car.license_plate,
      car_situation: car.car_situation.type_situation,
    }));
  }

  async get_car(id: number): Promise<car> {
    const foundCar = await this.carRepository.findOne({
      where: { id },
      relations: ["car_situation", "inside"],
    });
    if (!foundCar) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return foundCar;
  }

  async get_car_simple(id: number): Promise<
    {
      brand: string;
      number_seats: number;
      km_available: number;
      license_plate: string;
      car_situation: string;
    }[]
  > {
    const foundCar = await this.carRepository.findOne({
      where: { id },
      relations: ["car_situation"],
    });
    if (!foundCar) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return [
      {
        brand: foundCar.brand,
        number_seats: foundCar.number_seats,
        km_available: foundCar.km_available,
        license_plate: foundCar.license_plate,
        car_situation: foundCar.car_situation.type_situation,
      },
    ];
  }

  async create_car({
    brand,
    number_seats,
    km_available,
    license_plate,
    situation,
    return_date,
  }: CreateCarDto & { return_date?: Date }): Promise<car> {
    const foundSituation = await this.car_situationRepository.findOne({
      where: { type_situation: situation.type_situation },
    });
    if (!foundSituation) {
      throw new NotFoundException(
        `Car situation with type ${situation.type_situation} not found`
      );
    }

    const foundLicensePlate = await this.carRepository.findOne({
      where: { license_plate },
    });
    if (foundLicensePlate) {
      throw new NotFoundException(
        `Car with license plate ${license_plate} already exists`
      );
    }

    const newCar = this.carRepository.create({
      brand,
      number_seats,
      km_available,
      license_plate,
      car_situation: foundSituation,
    });
    const savedCar = await this.carRepository.save(newCar);

    if (return_date && situation.type_situation === "Inside") {
      const newInside = this.insideRepository.create({
        return_date,
        car: savedCar,
        car_situation: foundSituation,
      });
      await this.insideRepository.save(newInside);
    }

    return savedCar;
  }

  async update_car(
    id: number,
    {
      brand,
      number_seats,
      km_available,
      license_plate,
      situation,
      return_date,
    }: UpdateCarDto & { return_date?: Date }
  ): Promise<car> {
    const carToUpdate = await this.get_car(id);
    if (!carToUpdate) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    if (situation) {
      const foundSituation = await this.car_situationRepository.findOne({
        where: { type_situation: situation.type_situation },
      });
      if (!foundSituation) {
        throw new NotFoundException(
          `Car situation with type ${situation.type_situation} not found`
        );
      }
      carToUpdate.car_situation = foundSituation;
    }

    if (brand) {
      carToUpdate.brand = brand;
    }
    if (number_seats) {
      carToUpdate.number_seats = number_seats;
    }
    if (km_available) {
      carToUpdate.km_available = km_available;
    }
    if (license_plate) {
      carToUpdate.license_plate = license_plate;
    }

    const updatedCar = await this.carRepository.save(carToUpdate);

    if (situation && return_date && situation.type_situation === "Inside") {
      const foundSituation = await this.car_situationRepository.findOne({
        where: { type_situation: situation.type_situation },
      });
      if (!foundSituation) {
        throw new NotFoundException(
          `Car situation with type ${situation.type_situation} not found`
        );
      }
      let insideEntry = await this.insideRepository.findOne({
        where: { car: updatedCar },
      });
      if (!insideEntry) {
        const newInside = this.insideRepository.create({
          return_date,
          car_situation: foundSituation,
          car: updatedCar,
        });
        insideEntry = await this.insideRepository.save(newInside);
      } else {
        insideEntry.return_date = return_date;
        insideEntry.car_situation = foundSituation;
        await this.insideRepository.save(insideEntry);
      }
    } else {
      await this.insideRepository.delete({ car: updatedCar });
    }

    const updatedCarWithInside = await this.carRepository.findOne({
      where: { id: updatedCar.id },
      relations: ["inside"],
    });

    return updatedCarWithInside;
  }

  async delete_car(id: number): Promise<void> {
    const carToDelete = await this.carRepository.findOne({ where: { id } });

    if (!carToDelete) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    const insideEntry = await this.insideRepository.findOne({
      where: { car: carToDelete },
    });
    if (insideEntry) {
      await this.insideRepository.remove(insideEntry);
    }

    await this.carRepository.remove(carToDelete);
  }

  async generatePDF(): Promise<Buffer> {
    const cars = await this.carRepository.find({
      relations: ["car_situation"],
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
      const rows = cars.map((car) => [
        car.brand,
        car.number_seats.toString(),
        car.km_available.toString(),
        car.license_plate,
        car.car_situation.type_situation,
      ]);

      const table = {
        title: "Carros",
        headers: [
          "Marca",
          "Kilometraje",
          "Cantidad de Asientos",
          "Matrícula",
          "Situación",
        ],
        rows: rows,
      };

      // Configurar el tamaño de las columnas según sea necesario
      doc.table(table, {
        columnsSize: [100, 100, 100, 100, 100],
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

  async update_car_km(id: number, km_available: number): Promise<car> {
    const carToUpdate = await this.get_car(id);
    if (!carToUpdate) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    if (km_available) {
      carToUpdate.km_available = km_available;
    }

    const updatedCar = await this.carRepository.save(carToUpdate);
    return updatedCar;
  }

  /* async generatePdf(): Promise<void> {
    const doc = new PDFDocument({
        size: "LETTER",
        bufferPages: true
    });
    doc.pipe(fs.createWriteStream('example.pdf'));
    doc.text('Hola Mundo desde NestJS!');
    doc.end();
  }  */
}
