import { request } from './entities';
import { Repository } from 'typeorm';
import { turistic_group } from '../turistic_group/entities';
import { programing } from '../programing/entities';
import { CreateRequestDto } from './dto';
export declare class RequestService {
    private readonly requestRepository;
    private readonly TGRepository;
    private readonly programingRepository;
    constructor(requestRepository: Repository<request>, TGRepository: Repository<turistic_group>, programingRepository: Repository<programing>);
    get_requests(): Promise<request[]>;
    get_request(id: number): Promise<request>;
    create_request({ group, programing, request_date }: CreateRequestDto): Promise<request>;
}
