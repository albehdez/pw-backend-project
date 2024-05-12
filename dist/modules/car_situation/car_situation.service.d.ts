import { car_situation } from './entities/car_situation.entity';
import { CreateCarSituationDto } from './dto/create-car_situation.dto';
import { Repository } from 'typeorm';
export declare class CarSituationService {
    private readonly car_situation_repository;
    constructor(car_situation_repository: Repository<car_situation>);
    get_cars_situation(): Promise<car_situation[]>;
    get_car_situation(id: number): Promise<car_situation>;
    create_car_situation({ type_situation }: CreateCarSituationDto): Promise<car_situation>;
    delete_car_situation(id: number): Promise<void>;
}
