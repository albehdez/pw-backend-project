import { driver_category } from './entities';
import { CreateDriverCategoryDto } from './dto';
import { Repository } from 'typeorm';
export declare class DriverCategoryService {
    private readonly driver_category_repository;
    constructor(driver_category_repository: Repository<driver_category>);
    get_drivers_category(): Promise<driver_category[]>;
    get_driver_category(id: number): Promise<driver_category>;
    create_driver_category({ type_category }: CreateDriverCategoryDto): Promise<driver_category>;
    delete_driver_category(id: number): Promise<void>;
}
