/// <reference types="node" />
import { driver_situation } from '../driver_situation/entities/driver_situation.entity';
import { driver } from './entities/driver.entitty';
import { vacation } from '../vacation/entities/vacation.entity';
import { Repository } from 'typeorm';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { car } from '../car/entities';
import { driver_category } from '../driver_category/entities';
import { transport } from '../transport/entities';
export declare class DriverService {
    private readonly driverRepository;
    private readonly driver_situationRepository;
    private readonly driver_categoryRepository;
    private readonly vacationRepository;
    private readonly carRepository;
    private readonly transportRepository;
    constructor(driverRepository: Repository<driver>, driver_situationRepository: Repository<driver_situation>, driver_categoryRepository: Repository<driver_category>, vacationRepository: Repository<vacation>, carRepository: Repository<car>, transportRepository: Repository<transport>);
    get_drivers(): Promise<driver[]>;
    get_driver(id: number): Promise<driver>;
    getDriverAvailable(plate: string, date: Date): Promise<driver[]>;
    create_driver({ name, address, identify_card, permanent_car, situation, category, return_date }: CreateDriverDto & {
        return_date?: Date;
    }): Promise<driver>;
    update_driver(id: number, { name, address, identify_card, permanent_car, situation, return_date }: UpdateDriverDto & {
        return_date?: Date;
    }): Promise<driver>;
    delete_driver(id: number): Promise<void>;
    generatePDF(): Promise<Buffer>;
}
