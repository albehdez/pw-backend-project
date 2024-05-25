import { request_transport } from './entities';
import { Repository } from 'typeorm';
import { CreateRequestTransportDto } from './dto';
import { request } from '../request/entities';
import { transport } from '../transport/entities';
export declare class RequestTransportService {
    private readonly RTRepository;
    private readonly requestRepository;
    private readonly transportRepository;
    constructor(RTRepository: Repository<request_transport>, requestRepository: Repository<request>, transportRepository: Repository<transport>);
    get_request_transports(): Promise<request_transport[]>;
    get_request_transport(id: number): Promise<request_transport>;
    create_request_trasnport({ request, trasnport }: CreateRequestTransportDto): Promise<request_transport>;
    delete_request_transport(id: number): Promise<void>;
}
