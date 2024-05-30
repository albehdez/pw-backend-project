import { transport } from "./entities";
import { CreateTransportDto, UpdateTransportDto } from "./dto";
import { TransportService } from "./transport.service";
export declare class TransportController {
    private readonly transportService;
    constructor(transportService: TransportService);
    get_transports(): Promise<transport[]>;
    get_transport(id: number): Promise<transport>;
    create_transport(createTransportDto: CreateTransportDto): Promise<transport>;
    update_transport(id: number, updateTransportDto: UpdateTransportDto): Promise<transport>;
    delete_transport(id: number): Promise<void>;
}
