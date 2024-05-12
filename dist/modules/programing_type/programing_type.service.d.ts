import { programing_type } from './entities';
import { Repository } from 'typeorm';
import { CreateProgramingTypeDto } from './dto/crate_programing_type.dto';
export declare class ProgramingTypeService {
    private readonly programing_typeRepository;
    constructor(programing_typeRepository: Repository<programing_type>);
    get_programings_type(): Promise<programing_type[]>;
    get_programing_type(id: number): Promise<programing_type>;
    create_programing_type({ programing_type }: CreateProgramingTypeDto): Promise<programing_type>;
    delete_programing_type(id: number): Promise<void>;
}
