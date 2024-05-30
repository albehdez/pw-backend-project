import { DriverSituationService } from "./driver_situation.service";
import { driver_situation } from "./entities/driver_situation.entity";
import { CreateCarSituationDto } from "../car_situation/dto";
export declare class DriverSituationController {
    private readonly driver_situation_service;
    constructor(driver_situation_service: DriverSituationService);
    get_drivers_situation(): Promise<driver_situation[]>;
    get_driver_situation(id: number): Promise<driver_situation>;
    create_driver_situation(type_situation: CreateCarSituationDto): Promise<driver_situation>;
    delete_driver_situation(id: number): Promise<void>;
}
