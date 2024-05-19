/// <reference types="node" />
import { Repository } from 'typeorm';
import { programing } from './entities';
import { programing_type } from '../programing_type/entities';
import { CreateProgramingDto, UpdateProgramingDto } from './dto';
export declare class ProgramingService {
    private readonly programingRepository;
    private readonly programing_typeRepository;
    constructor(programingRepository: Repository<programing>, programing_typeRepository: Repository<programing_type>);
    get_programings(): Promise<programing[]>;
    get_programing(id: number): Promise<programing>;
    create_programing({ type, start_time, end_time, description, km_to_travel, delay }: CreateProgramingDto): Promise<programing>;
    update_programing(id: number, { type, start_time, end_time, description, km_to_travel, delay }: UpdateProgramingDto): Promise<programing>;
    delete_programing(id: number): Promise<void>;
    generatePDF(): Promise<Buffer>;
}
