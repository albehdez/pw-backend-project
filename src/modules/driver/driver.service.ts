import { Injectable, NotFoundException } from "@nestjs/common";
import { driver_situation } from "../driver_situation/entities/driver_situation.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { driver } from "./entities/driver.entitty";
import { vacation } from "../vacation/entities/vacation.entity";
import { Repository } from "typeorm";
import { CreateDriverDto, UpdateDriverDto } from "./dto";
import { car } from "../car/entities";
import { driver_category } from "../driver_category/entities";
import { transport } from "../transport/entities";
const PDFDocument = require("pdfkit-table");

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(driver)
    private readonly driverRepository: Repository<driver>,
    @InjectRepository(driver_situation)
    private readonly driver_situationRepository: Repository<driver_situation>,
    @InjectRepository(driver_category)
    private readonly driver_categoryRepository: Repository<driver_category>,
    @InjectRepository(vacation)
    private readonly vacationRepository: Repository<vacation>,
    @InjectRepository(car) private readonly carRepository: Repository<car>,
    @InjectRepository(transport)
    private readonly transportRepository: Repository<transport>
  ) {}

  async get_drivers(): Promise<driver[]> {
    return await this.driverRepository.find({
      relations: ["driver_situation", "vacation", "driver_category"],
    });
  }

  async get_driver(id: number): Promise<driver> {
    const foundDriver = await this.driverRepository.findOne({
      where: { id },
      relations: ["driver_situation", "vacation", "driver_category"],
    });
    if (!foundDriver) {
      throw new NotFoundException(`Driver with id ${id} not found`);
    }
    return foundDriver;
  }

  async getDriverAvailable(plate: string, date: Date): Promise<driver[]> {
    let driversAvailable = await this.driverRepository.find({
      where: { driver_situation: { type_situation: "Available" } },
      relations: ["driver_situation", "vacation", "driver_category"],
    });
    const driverWithSpedificPlate = driversAvailable.filter(
      (driver) => driver.permanent_car === plate
    );

    if (driverWithSpedificPlate.length === 0) {
      const filteredDriversPromises = driversAvailable.map(async (driver) => {
        const hasTransports = driver.transport && driver.transport.length > 0;

        if (hasTransports) {
          let foundDriver = false;
          for (const transport of driver.transport) {
            for (const request of transport.request) {
              if (new Date(request.request_date).getTime() === date.getTime()) {
                foundDriver = true;
                break;
              }
            }
            if (foundDriver) break;
          }
          return foundDriver ? null : driver;
        }

        return driver;
      });
      const filteredDrivers = await Promise.all(filteredDriversPromises);
      const availableDrives = filteredDrivers.filter(
        (driver) => driver !== null
      );

      return availableDrives;
    } else {
      return driverWithSpedificPlate;
    }
  }

  async create_driver({
    name,
    address,
    identify_card,
    permanent_car,
    situation,
    category,
    return_date,
  }: CreateDriverDto & { return_date?: Date }): Promise<driver> {
    if (permanent_car) {
      const foundCar = await this.carRepository.findOne({
        where: { license_plate: permanent_car },
      });
      if (!foundCar) {
        throw new NotFoundException(
          `Car with license plate ${permanent_car} does not exist`
        );
      }
    }

    const foundSituation = await this.driver_situationRepository.findOne({
      where: { type_situation: situation.type_situation },
    });
    const foundCategory = await this.driver_categoryRepository.findOne({
      where: { type_category: category.type_category },
    });

    if (!foundSituation) {
      throw new NotFoundException(
        `Driver situation with type ${situation.type_situation} not found`
      );
    }

    if (!foundCategory) {
      throw new NotFoundException(
        `Driver category with type ${category.type_category} not found`
      );
    }

    const foundIdentifyCard = await this.driverRepository.findOne({
      where: { identify_card },
    });
    if (foundIdentifyCard) {
      throw new NotFoundException(
        `Driver with identify card ${identify_card} already exists`
      );
    }

    const newDriver = this.driverRepository.create({
      name,
      address,
      identify_card,
      permanent_car,
      driver_situation: foundSituation,
      driver_category: foundCategory,
    });

    const savedDriver = await this.driverRepository.save(newDriver);

    if (return_date && situation.type_situation === "Vacation") {
      const newVacation = this.vacationRepository.create({
        return_date,
        situation: foundSituation,
        driver: savedDriver,
      });
      await this.vacationRepository.save(newVacation);
    }

    return savedDriver;
  }

  async update_driver(
    id: number,
    {
      name,
      address,
      identify_card,
      permanent_car,
      situation,
      return_date,
    }: UpdateDriverDto & { return_date?: Date }
  ): Promise<driver> {
    const driverToUpdate = await this.get_driver(id);
    if (!driverToUpdate) {
      throw new NotFoundException(`Driver with id ${id} not found`);
    }

    if (situation) {
      const foundSituation = await this.driver_situationRepository.findOne({
        where: { type_situation: situation.type_situation },
      });
      if (!foundSituation) {
        throw new NotFoundException(
          `Driver situation with type ${situation.type_situation} not found`
        );
      }
      driverToUpdate.driver_situation = foundSituation;
    }

    if (name) {
      driverToUpdate.name = name;
    }
    if (address) {
      driverToUpdate.address = address;
    }
    if (identify_card) {
      driverToUpdate.identify_card = identify_card;
    }

    if (permanent_car) {
      const foundCar = await this.carRepository.findOne({
        where: { license_plate: permanent_car },
      });
      if (!foundCar) {
        throw new NotFoundException(
          `Car with license plate ${permanent_car} does not exist`
        );
      }
      driverToUpdate.permanent_car = permanent_car;
    } else {
      driverToUpdate.permanent_car = null;
    }

    const updatedDriver = await this.driverRepository.save(driverToUpdate);

    if (situation && return_date && situation.type_situation === "Vacation") {
      const foundSituation = await this.driver_situationRepository.findOne({
        where: { type_situation: situation.type_situation },
      });
      if (!foundSituation) {
        throw new NotFoundException(
          `Driver situation with type ${situation.type_situation} not found`
        );
      }

      let vacationEntry = await this.vacationRepository.findOne({
        where: { driver: updatedDriver },
      });
      if (!vacationEntry) {
        const newVacation = this.vacationRepository.create({
          return_date,
          situation: foundSituation,
          driver: updatedDriver,
        });
        vacationEntry = await this.vacationRepository.save(newVacation);
      } else {
        vacationEntry.return_date = return_date;
        vacationEntry.situation = foundSituation;
        await this.vacationRepository.save(vacationEntry);
      }
    } else {
      await this.vacationRepository.delete({ driver: updatedDriver });
    }

    const updatedDriverWithVacation = await this.driverRepository.findOne({
      where: { id: updatedDriver.id },
      relations: ["vacation"],
    });

    return updatedDriverWithVacation;
  }

  async delete_driver(id: number): Promise<void> {
    const driverToDelete = await this.driverRepository.findOne({
      where: { id },
    });

    if (!driverToDelete) {
      throw new NotFoundException(`Driver with id ${id} not found`);
    }
    const vacationEntry = await this.vacationRepository.findOne({
      where: { driver: driverToDelete },
    });
    if (vacationEntry) {
      await this.vacationRepository.remove(vacationEntry);
    }

    await this.driverRepository.remove(driverToDelete);
  }

  async generatePDF(): Promise<Buffer> {
    const drivers = await this.driverRepository.find({
      relations: ["driver_situation", "driver_category"],
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
      const rows = drivers.map((driver) => [
        driver.name,
        driver.permanent_car ? driver.permanent_car : "-",
        driver.driver_situation.type_situation,
        driver.driver_category.type_category,
        driver.address,
        driver.identify_card,
      ]);

      const table = {
        title: "Choferes",
        headers: [
          "Nombre",
          "Carro permanernte",
          "Situación",
          "Categoría",
          "Dirección",
          "Identificación",
        ],
        rows: rows,
      };

      // Configurar el tamaño de las columnas según sea necesario
      doc.table(table, {
        columnsSize: [100, 100, 100, 100, 100, 100],
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
