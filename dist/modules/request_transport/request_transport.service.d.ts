import { request_transport } from './entities';
import { Repository } from 'typeorm';
export declare class RequestTransportService {
    private readonly requesttRepository;
    constructor(requesttRepository: Repository<request_transport>);
    get_request_transports(): Promise<request_transport[]>;
    get_request_transport(id: number): Promise<request_transport>;
    delete_request_transport(id: number): Promise<void>;
}
