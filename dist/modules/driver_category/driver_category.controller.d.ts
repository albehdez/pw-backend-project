import { DriverCategoryService } from './driver_category.service';
import { driver_category } from './entities';
import { CreateDriverCategoryDto } from './dto';
export declare class DriverCategoryController {
    private readonly driver_category_service;
    constructor(driver_category_service: DriverCategoryService);
    get_drivers_category(): Promise<driver_category[]>;
    get_driver_category(id: number): Promise<driver_category>;
    create_driver_category(type_situation: CreateDriverCategoryDto): Promise<driver_category>;
    delete_driver_category(id: number): Promise<void>;
}
