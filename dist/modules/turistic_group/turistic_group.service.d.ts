/// <reference types="node" />
import { Repository } from 'typeorm';
import { country } from '../country/entities';
import { turistic_group } from './entities';
import { CreateTuristicGroupDto, UpdateTuristicGroupDto } from './dto';
export declare class TuristicGroupService {
    private readonly turistic_groupRepository;
    private readonly countryRepository;
    constructor(turistic_groupRepository: Repository<turistic_group>, countryRepository: Repository<country>);
    get_turistic_groups(): Promise<turistic_group[]>;
    get_turistic_group(id: number): Promise<turistic_group>;
    create_turistic_group({ number_turist, country }: CreateTuristicGroupDto): Promise<turistic_group>;
    update_turistic_group(id: number, { number_turist, country }: UpdateTuristicGroupDto): Promise<turistic_group>;
    delete_turistic_group(id: number): Promise<void>;
    generatePDF(): Promise<Buffer>;
}
