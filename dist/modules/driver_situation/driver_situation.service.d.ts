import { driver_situation } from './entities/driver_situation.entity';
import { Repository } from 'typeorm';
import { CreateDriverSituationDto } from './dto';
export declare class DriverSituationService {
    private readonly driver_situation_repository;
    constructor(driver_situation_repository: Repository<driver_situation>);
    get_drivers_situation(): Promise<driver_situation[]>;
    get_driver_situation(id: number): Promise<driver_situation>;
    create_driver_situation({ type_situation }: CreateDriverSituationDto): Promise<driver_situation>;
    delete_driver_situation(id: number): Promise<void>;
}
