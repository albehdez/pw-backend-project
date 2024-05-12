import { driver_category } from "src/modules/driver_category/entities";
import { driver_situation } from "src/modules/driver_situation/entities/driver_situation.entity";
export declare class CreateDriverDto {
    name: string;
    address: string;
    identify_card: string;
    permanent_car: string;
    situation: Partial<driver_situation>;
    category: Partial<driver_category>;
}
