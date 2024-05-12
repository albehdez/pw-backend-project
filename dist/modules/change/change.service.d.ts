import { change } from './entities';
import { Repository } from 'typeorm';
import { change_type } from '../change_type/entities';
import { request } from '../request/entities/request.entity';
import { CreateChangeDto } from './dto';
export declare class ChangeService {
    private readonly changeRepository;
    private readonly change_typeRepository;
    private readonly requestRepository;
    constructor(changeRepository: Repository<change>, change_typeRepository: Repository<change_type>, requestRepository: Repository<request>);
    get_changes(): Promise<change[]>;
    get_change(id: number): Promise<change>;
    create_change({ change_type, description, request }: CreateChangeDto): Promise<change>;
    delete_change(id: number): Promise<void>;
}
