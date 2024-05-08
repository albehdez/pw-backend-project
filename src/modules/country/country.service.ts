/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { country } from './entities';
import { CreateCountryDto } from './dto';

@Injectable()
export class CountryService {

    constructor(@InjectRepository(country) private readonly country_repository: Repository<country>){}
    
    async get_countrys():Promise<country[]>{
        return await this.country_repository.find();
    }

    async get_country(id:number):Promise<country>{
        const country= await this.country_repository.findOne({where:{id}});

        if(!country){
            throw new NotFoundException(`Country with id ${id} not found`);
        }
        return country;
    }

    async create_country({name}:CreateCountryDto){
        const country = this.country_repository.create({
            name
        });

        return this.country_repository.save(country);       
    }

    async delete_country(id: number): Promise<void> {
        const country: country = await this.get_country(id);
        await this.country_repository.delete(country);
    }
}
