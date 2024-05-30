import { request_transport } from "./entities";
import { RequestTransportService } from "./request_transport.service";
export declare class RequestTransportController {
    private readonly request_transport_service;
    constructor(request_transport_service: RequestTransportService);
    get_request_transports(): Promise<request_transport[]>;
    get_request_transport(id: number): Promise<request_transport>;
    delete_request_transport(id: number): Promise<void>;
}
