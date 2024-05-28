import { car_situation } from "src/modules/car_situation/entities/car_situation.entity";
import { inside } from "src/modules/inside/entities/inside.entity";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { transport } from "src/modules/transport/entities";
import { roadmap } from "src/modules/roadmap/entities";
export declare class car {
    id: number;
    brand: string;
    number_seats: number;
    km_available: number;
    license_plate: string;
    car_situation: car_situation;
    inside: inside;
    drivers: driver[];
    transport: transport[];
    roadmap: roadmap[];
}
