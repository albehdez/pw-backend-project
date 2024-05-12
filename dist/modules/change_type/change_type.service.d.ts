import { change_type } from './entities';
import { Repository } from 'typeorm';
import { CreateChangeTypeDto } from './dto';
export declare class ChangeTypeService {
    private readonly change_type_repository;
    constructor(change_type_repository: Repository<change_type>);
    get_changes_type(): Promise<change_type[]>;
    get_change_type(id: number): Promise<change_type>;
    create_change_type({ change_type }: CreateChangeTypeDto): Promise<change_type>;
    delete_change_type(id: number): Promise<void>;
}
