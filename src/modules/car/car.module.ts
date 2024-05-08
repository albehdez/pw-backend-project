/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { car } from './entities';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { car_situation } from '../car_situation/entities';
import { inside } from '../inside/entities/inside.entity';

@Module({
    imports: [TypeOrmModule.forFeature([car,car_situation,inside])],
    controllers:[CarController],
    providers:[CarService]
    
})
export class CarModule {}
