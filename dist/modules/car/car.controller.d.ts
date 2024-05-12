import { CarService } from './car.service';
import { car } from './entities';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    get_cars(): Promise<car[]>;
    get_car(id: number): Promise<car>;
    create_car(createCarDto: CreateCarDto): Promise<car>;
    update_car(id: number, updateCarDto: UpdateCarDto): Promise<car>;
    delete_car(id: number): Promise<void>;
}
