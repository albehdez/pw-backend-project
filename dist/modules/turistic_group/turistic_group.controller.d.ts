import { TuristicGroupService } from './turistic_group.service';
import { turistic_group } from './entities';
import { CreateTuristicGroupDto, UpdateTuristicGroupDto } from './dto';
export declare class TuristicGroupController {
    private readonly turistic_groupService;
    constructor(turistic_groupService: TuristicGroupService);
    get_turistic_groups(): Promise<turistic_group[]>;
    get_turistic_group(id: number): Promise<turistic_group>;
    create_turistic_group(createTuristicGroupDto: CreateTuristicGroupDto): Promise<turistic_group>;
    update_turistic_group(id: number, updateTuristicGroupDto: UpdateTuristicGroupDto): Promise<turistic_group>;
    delete_turistic_group(id: number): Promise<void>;
}
