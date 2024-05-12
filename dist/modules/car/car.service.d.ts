import { car } from './entities/car.entity';
import { Repository } from 'typeorm';
import { CreateCarDto, UpdateCarDto } from './dto';
import { car_situation } from '../car_situation/entities';
import { inside } from '../inside/entities/inside.entity';
export declare class CarService {
    private readonly carRepository;
    private readonly car_situationRepository;
    private readonly insideRepository;
    constructor(carRepository: Repository<car>, car_situationRepository: Repository<car_situation>, insideRepository: Repository<inside>);
    get_cars(): Promise<car[]>;
    get_car(id: number): Promise<car>;
    create_car({ brand, number_seats, km_available, license_plate, situation, return_date }: CreateCarDto & {
        return_date?: Date;
    }): Promise<car>;
    update_car(id: number, { brand, number_seats, km_available, license_plate, situation, return_date }: UpdateCarDto & {
        return_date?: Date;
    }): Promise<car>;
    delete_car(id: number): Promise<void>;
}
