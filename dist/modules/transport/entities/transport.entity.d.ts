import { car } from "src/modules/car/entities";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { request } from "src/modules/request/entities";
import { request_transport } from "src/modules/request_transport/entities";
export declare class transport {
    id: number;
    is_copilot: boolean;
    car: car;
    driver: driver;
    request: request[];
    request_transport: request_transport[];
}
