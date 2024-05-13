import { ChangeService } from './change.service';
import { change } from './entities';
import { CreateChangeDto } from './dto';
export declare class ChangeController {
    private readonly changeService;
    constructor(changeService: ChangeService);
    get_changes(): Promise<change[]>;
    get_change(id: number): Promise<change>;
    create_change(createChangeDto: CreateChangeDto): Promise<change>;
    delete_change(id: number): Promise<void>;
}
