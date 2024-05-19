/// <reference types="node" />
import { vacation } from "./entities/vacation.entity";
import { Repository } from "typeorm";
export declare class VacationService {
    private readonly vacationRepository;
    constructor(vacationRepository: Repository<vacation>);
    get_drivers_vacation(): Promise<vacation[]>;
    get_driver_vacation(id: number): Promise<vacation>;
    delete_driver_vacation(id: number): Promise<void>;
    generatePDF(): Promise<Buffer>;
}
