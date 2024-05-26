import { transport } from "./entities";
import { car } from "../car/entities";
import { driver } from "../driver/entities/driver.entitty";
import { Repository } from "typeorm";
import { CreateTransportDto, UpdateTransportDto } from "./dto";
export declare class TransportService {
    private readonly transportRepository;
    private readonly carRepository;
    private readonly driverRepository;
    constructor(transportRepository: Repository<transport>, carRepository: Repository<car>, driverRepository: Repository<driver>);
    get_transports(): Promise<transport[]>;
    get_transport(id: number): Promise<transport>;
    create_transport({ is_copilot, car, driver, }: CreateTransportDto): Promise<transport>;
    update_transport(id: number, { is_copilot, car, driver }: UpdateTransportDto): Promise<transport>;
    delete_transport(id: number): Promise<void>;
}
