import { Injectable, NotFoundException } from "@nestjs/common";
import { request } from "./entities";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { turistic_group } from "../turistic_group/entities";
import { programing } from "../programing/entities";
import { CreateRequestDto } from "./dto";
import { user } from "../user/entities";
import { Role } from "../common/enums/role.enum";
import { TransportService } from "../transport/transport.service";
import { RequestTransportService } from "../request_transport/request_transport.service";
import { CreateRequestTransportDto } from "../request_transport/dto";
import { CarService } from "../car/car.service";
import { DriverService } from "../driver/driver.service";

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(request)
    private readonly requestRepository: Repository<request>,
    @InjectRepository(turistic_group)
    private readonly TGRepository: Repository<turistic_group>,
    @InjectRepository(programing)
    private readonly programingRepository: Repository<programing>,
    @InjectRepository(user) private readonly clientRepository: Repository<user>,
    private transportService: TransportService,
    private carService: CarService,
    private driverService: DriverService,
    private RtransportService: RequestTransportService
  ) {}
  // @InjectRepository(car) private readonly carRepository: Repository<car>) {}

  async get_requests(): Promise<request[]> {
    return await this.requestRepository.find({
      relations: ["turistic_group", "programing"],
    });
  }

  async get_request(id: number): Promise<request> {
    const foundRequest = await this.requestRepository.findOne({
      where: { id },
      relations: ["turistic_group", "programing"],
    });
    if (!foundRequest) {
      throw new NotFoundException(`Request with id ${id} not found`);
    }
    return foundRequest;
  }

  async create_request(
    { group, programing, request_date, client }: CreateRequestDto,
    id_car: number,
    id_driver: number,
    is_copilot: boolean
  ): Promise<request> {
    if (client) {
      var foundClient = await this.clientRepository.findOne({
        where: { id: client.id },
      });
      if (!foundClient) {
        throw new NotFoundException(
          `Client with id ${group.id} does not exist`
        );
      }
      if (foundClient.role.role !== Role.Client) {
        throw new NotFoundException(
          `User with id ${client.id} does not Client`
        );
      }
    }

    if (group) {
      var foundGroup = await this.TGRepository.findOne({
        where: { id: group.id },
      });
      if (!foundGroup) {
        throw new NotFoundException(
          `Turistic Group withid ${group.id} does not exist`
        );
      }
    }

    if (programing) {
      var foundPrograming = await this.programingRepository.findOne({
        where: { id: programing.id },
      });
      if (!foundPrograming) {
        throw new NotFoundException(
          `Programing with id ${programing.id} does not exist`
        );
      }
    }

    const car = this.carService.get_car(id_car);
    const driver = this.driverService.get_driver(id_driver);
    const transport = this.transportService.create_transport({
      car: await car,
      driver: await driver,
      is_copilot,
    });

    const newRequest = this.requestRepository.create({
      group: foundGroup,
      programing: foundPrograming,
      request_date,
    });
    const savedRequest = await this.requestRepository.save(newRequest);

    this.RtransportService.create_request_trasnport({
      request: newRequest,
      trasnport: await transport,
    });

    return savedRequest;
  }
}
