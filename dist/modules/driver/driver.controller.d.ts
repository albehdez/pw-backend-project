import { DriverService } from './driver.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { driver } from './entities/driver.entitty';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    get_drivers(): Promise<driver[]>;
    get_driver(id: number): Promise<driver>;
    create_driver(createDriverDto: CreateDriverDto): Promise<driver>;
    update_driver(id: number, updateDriverDto: UpdateDriverDto): Promise<driver>;
    delete_driver(id: number): Promise<void>;
}
