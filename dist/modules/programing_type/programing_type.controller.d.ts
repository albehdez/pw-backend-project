import { ProgramingTypeService } from "./programing_type.service";
import { programing_type } from "./entities";
import { CreateProgramingTypeDto } from "./dto/crate_programing_type.dto";
export declare class ProgramingTypeController {
    private readonly programing_type_service;
    constructor(programing_type_service: ProgramingTypeService);
    get_programings_type(): Promise<programing_type[]>;
    get_programing_type(id: number): Promise<programing_type>;
    create_programing_type(programing_type: CreateProgramingTypeDto): Promise<programing_type>;
    delete_programing_type(id: number): Promise<void>;
}
