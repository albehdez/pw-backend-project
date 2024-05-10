/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { country } from './entities';
import { CreateCountryDto } from './dto';

@Controller('country')
export class CountryController {
    constructor(private readonly country_service:CountryService){
    }

    @Get()
    get_countrys():Promise<country[]>{
        return this.country_service.get_countrys();
    }

    @Get(':id')
    get_country(@Param('id') id:number):Promise<country>{
        return this.country_service.get_country(id);
    }

    @Post()
    create_country(@Body() name: CreateCountryDto): Promise<country> {
        return this.country_service.create_country(name);
    }


    @Delete(':id')
    delete_country(@Param('id')id:number):Promise<void>{
        return this.country_service.delete_country(id);
    }
}
