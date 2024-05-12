import { Repository } from 'typeorm';
import { country } from './entities';
import { CreateCountryDto } from './dto';
export declare class CountryService {
    private readonly country_repository;
    constructor(country_repository: Repository<country>);
    get_countrys(): Promise<country[]>;
    get_country(id: number): Promise<country>;
    create_country({ name }: CreateCountryDto): Promise<country>;
    delete_country(id: number): Promise<void>;
}
