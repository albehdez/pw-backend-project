import { car } from "src/modules/car/entities";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { programing } from "src/modules/programing/entities";
import { turistic_group } from "src/modules/turistic_group/entities";
import { user } from "src/modules/user/entities";
export declare class CreateRequestDto {
    group: Partial<turistic_group>;
    programing: Partial<programing>;
    request_date: Date;
    client: Partial<user>;
    is_copilot: boolean;
    car: Partial<car>;
    driver: Partial<driver>;
}
