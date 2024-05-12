import { driver_situation } from "src/modules/driver_situation/entities/driver_situation.entity";
import { driver } from "src/modules/driver/entities/driver.entitty";
export declare class vacation {
    id: number;
    return_date: Date;
    situation: driver_situation;
    driver: driver;
}
