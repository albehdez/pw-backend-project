import { CountryService } from "./country.service";
import { country } from "./entities";
import { CreateCountryDto } from "./dto";
export declare class CountryController {
    private readonly country_service;
    constructor(country_service: CountryService);
    get_countrys(): Promise<country[]>;
    get_country(id: number): Promise<country>;
    create_country(name: CreateCountryDto): Promise<country>;
    delete_country(id: number): Promise<void>;
}
