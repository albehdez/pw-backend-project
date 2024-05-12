import { car } from "src/modules/car/entities";
import { driver_category } from "src/modules/driver_category/entities";
import { driver_situation } from "src/modules/driver_situation/entities/driver_situation.entity";
import { transport } from "src/modules/transport/entities";
import { vacation } from "src/modules/vacation/entities/vacation.entity";
export declare class driver {
    id: number;
    name: string;
    address: string;
    identify_card: string;
    permanent_car: string;
    driver_situation: driver_situation;
    driver_category: driver_category;
    vacation: vacation[];
    cars: car[];
    transport: transport[];
}
