/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { transport } from "./entities";
import { InjectRepository } from "@nestjs/typeorm";
import { car } from "../car/entities";
import { driver } from "../driver/entities/driver.entitty";
import { Repository } from "typeorm";
import { CreateTransportDto, UpdateTransportDto } from "./dto";

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(transport)
    private readonly transportRepository: Repository<transport>,
    @InjectRepository(car) private readonly carRepository: Repository<car>,
    @InjectRepository(driver)
    private readonly driverRepository: Repository<driver>
  ) {}

  async get_transports(): Promise<transport[]> {
    return await this.transportRepository.find({
      relations: ["car", "driver"],
    });
  }

  async get_transport(id: number): Promise<transport> {
    const foundTranspor = await this.transportRepository.findOne({
      where: { id },
      relations: ["car", "driver"],
    });
    if (!foundTranspor) {
      throw new NotFoundException(`Transport with id ${id} not found`);
    }
    return foundTranspor;
  }

  async create_transport({
    is_copilot,
    car,
    driver,
  }: CreateTransportDto): Promise<transport> {
    const existingTransport = await this.transportRepository.findOne({
      where: { car: { id: car.id }, driver: { id: driver.id } },
    });

    if (existingTransport) {
      return existingTransport;
    } else {
      const newTransport = this.transportRepository.create({
        car: car,
        driver: driver,
        is_copilot: is_copilot,
      });
      const savedTransport = await this.transportRepository.save(newTransport);
      return savedTransport;
    }
  }
  async update_transport(
    id: number,
    { is_copilot, car, driver }: UpdateTransportDto
  ): Promise<transport> {
    const foundTransport = await this.get_transport(id);
    if (!foundTransport) {
      throw new NotFoundException(`Transport with type ${id} not found`);
    }

    const foundCar = await this.carRepository.findOne({
      where: { id: car.id },
    });
    if (!foundCar) {
      throw new NotFoundException(`Car with type ${car.id} not found`);
    }
    foundTransport.car = foundCar;

    const foundDriver = await this.driverRepository.findOne({
      where: { id: driver.id },
    });
    if (foundDriver) {
      throw new NotFoundException(`Driver with id ${driver.id} not found`);
    }
    foundTransport.driver = foundDriver;

    if (is_copilot) {
      foundTransport.is_copilot = is_copilot;
    }

    const updatedTransport =
      await this.transportRepository.save(foundTransport);

    return updatedTransport;
  }

  async delete_transport(id: number): Promise<void> {
    const transportToDelete = await this.transportRepository.findOne({
      where: { id },
    });

    if (!transportToDelete) {
      throw new NotFoundException(`Transport with id ${id} not found`);
    }

    await this.transportRepository.remove(transportToDelete);
  }
}
