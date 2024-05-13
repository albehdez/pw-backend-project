import { driver } from "src/modules/driver/entities/driver.entitty";
import { vacation } from "src/modules/vacation/entities/vacation.entity";
export declare class driver_situation {
    id: number;
    type_situation: string;
    drivers: driver[];
    vacation: vacation[];
}
