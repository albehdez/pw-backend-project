import { InsideService } from './inside.service';
import { inside } from './entities/inside.entity';
export declare class InsideController {
    private readonly inside_service;
    constructor(inside_service: InsideService);
    get_cars_inside(): Promise<inside[]>;
    get_car_inside(id: number): Promise<inside>;
    delete_car_inside(id: number): Promise<void>;
}
