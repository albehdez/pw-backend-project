import { CarService } from "./car.service";
import { car } from "./entities";
import { CreateCarDto, UpdateCarDto } from "./dto";
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    get_cars(): Promise<car[]>;
    get_cars_simple(): Promise<{
        brand: string;
        number_seats: number;
        km_available: number;
        license_plate: string;
        car_situation: string;
    }[]>;
    get_car(id: number): Promise<car>;
    get_car_simple(id: number): Promise<{
        brand: string;
        number_seats: number;
        km_available: number;
        license_plate: string;
        car_situation: string;
    }[]>;
    create_car(createCarDto: CreateCarDto): Promise<car>;
    update_car(id: number, updateCarDto: UpdateCarDto): Promise<car>;
    delete_car(id: number): Promise<void>;
}
