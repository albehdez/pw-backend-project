import { request } from "./entities";
import { Repository } from "typeorm";
import { turistic_group } from "../turistic_group/entities";
import { programing } from "../programing/entities";
import { CreateRequestDto } from "./dto";
import { user } from "../user/entities";
import { TransportService } from "../transport/transport.service";
import { RequestTransportService } from "../request_transport/request_transport.service";
import { CarService } from "../car/car.service";
import { DriverService } from "../driver/driver.service";
export declare class RequestService {
    private readonly requestRepository;
    private readonly TGRepository;
    private readonly programingRepository;
    private readonly clientRepository;
    private transportService;
    private carService;
    private driverService;
    private RtransportService;
    constructor(requestRepository: Repository<request>, TGRepository: Repository<turistic_group>, programingRepository: Repository<programing>, clientRepository: Repository<user>, transportService: TransportService, carService: CarService, driverService: DriverService, RtransportService: RequestTransportService);
    get_requests(): Promise<request[]>;
    get_request(id: number): Promise<request>;
    create_request({ group, programing, request_date, client }: CreateRequestDto, id_car: number, id_driver: number, is_copilot: boolean): Promise<request>;
}
