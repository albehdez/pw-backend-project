import { VacationService } from './vacation.service';
import { vacation } from './entities/vacation.entity';
export declare class VacationController {
    private readonly vacation_service;
    constructor(vacation_service: VacationService);
    get_drivers_vacation(): Promise<vacation[]>;
    get_driver_vacation(id: number): Promise<vacation>;
    delete_driver_vacation(id: number): Promise<void>;
}
