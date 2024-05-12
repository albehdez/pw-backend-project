import { car } from "src/modules/car/entities";
import { driver } from "src/modules/driver/entities/driver.entitty";
export declare class CreateTransportDto {
    is_copilot: boolean;
    car: Partial<car>;
    driver: Partial<driver>;
}
