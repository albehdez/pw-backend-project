import { RequestService } from "./request.service";
import { request } from "./entities";
import { CreateTransportDto } from "../transport/dto";
import { CreateRequestDto, UpdateRequestDto } from "./dto";
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    get_requests(): Promise<request[]>;
    get_request(id: number): Promise<request>;
    get_solved_requests(): Promise<request[]>;
    get_no_solved_requests(): Promise<request[]>;
    create_request(createrequestDto: CreateRequestDto, createtransportDto: CreateTransportDto): Promise<request>;
    update_request(id: number, updateRequestDto: UpdateRequestDto): Promise<request>;
    delete_request(id: number): Promise<void>;
}
