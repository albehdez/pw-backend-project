import { ChangeTypeService } from './change_type.service';
import { change_type } from './entities';
import { CreateChangeTypeDto } from './dto';
export declare class ChangeTypeController {
    private readonly change_type_service;
    constructor(change_type_service: ChangeTypeService);
    get_changes_type(): Promise<change_type[]>;
    get_change_type(id: number): Promise<change_type>;
    create_changes_type(createChangeTypeDto: CreateChangeTypeDto): Promise<change_type>;
    delete_changes_type(id: number): Promise<void>;
}
