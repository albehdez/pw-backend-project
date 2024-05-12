import { CountryService } from './country.service';
import { country } from './entities';
import { CreateCountryDto } from './dto';
export declare class CountryController {
    private readonly country_service;
    constructor(country_service: CountryService);
    get_cars_situation(): Promise<country[]>;
    get_car_situation(id: number): Promise<country>;
    create_car_situation(name: CreateCountryDto): Promise<country>;
    delete_car_situation(id: number): Promise<void>;
}
