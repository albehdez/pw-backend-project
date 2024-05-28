import { Injectable, NotFoundException } from "@nestjs/common";
import { request } from "./entities";
import { Between, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { turistic_group } from "../turistic_group/entities";
import { programing } from "../programing/entities";
import { CreateRequestDto, UpdateRequestDto } from "./dto";
import { user } from "../user/entities";
import { Role } from "../common/enums/role.enum";
import { TransportService } from "../transport/transport.service";
import { RequestTransportService } from "../request_transport/request_transport.service";
import { CreateRequestTransportDto } from "../request_transport/dto";
import { CarService } from "../car/car.service";
import { DriverService } from "../driver/driver.service";
import { CreateTransportDto } from "../transport/dto";
import { Cron } from "@nestjs/schedule";
import { RoadmapService } from "../roadmap/roadmap.service";
import { RoadmapRequestService } from "../roadmap_request/roadmap_request.service";
import { CreateRoadmapDto } from "../roadmap/dto";

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
    private RtransportService: RequestTransportService,
    private roadmapService: RoadmapService,
    private RroadmapService: RoadmapRequestService
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
    { is_copilot, car, driver }: CreateTransportDto
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

    const Ncar = this.carService.get_car(car.id);
    const Ndriver = this.driverService.get_driver(driver.id);
    const transport = this.transportService.create_transport({
      car: await Ncar,
      driver: await Ndriver,
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

  async update_request(
    id: number,
    { group, programing, request_date }: UpdateRequestDto
  ): Promise<request> {
    const requestUpdate = await this.get_request(id);
    if (!requestUpdate) {
      throw new NotFoundException(`Request with id ${id} not found`);
    }

    if (request_date && new Date(request_date) <= new Date()) {
      throw new NotFoundException(
        "La fecha del request debe ser mayor a la fecha actual"
      );
    }
    if (group) {
      const group_u = await this.TGRepository.findOne({
        where: { id: group.id },
      });
      if (!group_u) {
        throw new NotFoundException(
          `Turistic Group whith id ${group.id} not found`
        );
      }
      requestUpdate.group = group_u;
    }

    if (programing) {
      const programing_u = await this.programingRepository.findOne({
        where: { id: programing.id },
      });
      if (!programing_u) {
        throw new NotFoundException(
          `Programing whith id ${group.id} not found`
        );
      }
      requestUpdate.programing = programing_u;
    }

    if (request_date) {
      requestUpdate.request_date = new Date(request_date);
    }

    const upr = await this.requestRepository.save(requestUpdate);

    return upr;
  }

  async delete_request(id: number): Promise<void> {
    const requestdelete = await this.get_request(id);

    if (!requestdelete) {
      throw new NotFoundException(`Request with id ${id} not found`);
    }

    await this.requestRepository.remove(requestdelete);
  }

  @Cron("0 0 * *")
  async handleCron() {
    const today = new Date();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const startOfToday = new Date(
      currentYear,
      currentMonth,
      currentDay
    ).setHours(0, 0, 0, 0);
    const endOfToday = new Date(currentYear, currentMonth, currentDay).setHours(
      23,
      59,
      59,
      999
    );

    const request = await this.requestRepository.find({
      where: {
        request_date: Between(new Date(startOfToday), new Date(endOfToday)),
      },
      relations: ["request_transport", "request_transport.transport"],
    });

    request.forEach(async (req) => {
      for (const rt of req.request_transport) {
        const car = await this.carService.get_car(rt.transport.car.id);
        if (car) {
          var km_star = car.km_available;
          var km_end = km_star + req.programing.km_to_travel;
          var roadmap = await this.roadmapService.create_roadmap({
            km_start: km_star,
            km_end: km_end,
            car,
          });
          await this.RroadmapService.create_roadmap_request({
            request: req,
            roadmap: roadmap,
          });
          await this.carService.update_car_km(car.id, km_end);
        }
      }
    });
  }
}
