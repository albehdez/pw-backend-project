/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { country } from './entities';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
    imports:[TypeOrmModule.forFeature([country])],
    controllers:[CountryController],
    providers:[CountryService]
})
export class CountryModule {}

