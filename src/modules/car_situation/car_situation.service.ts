/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { car_situation } from './entities/car_situation.entity';
import { CreateCarSituationDto } from './dto/create-car_situation.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarSituationService {

    constructor(@InjectRepository(car_situation) private readonly car_situation_repository:Repository<car_situation>) {}


    async get_cars_situation():Promise<car_situation[]>{
        return await this.car_situation_repository.find();
    }

    async get_car_situation(id: number):Promise<car_situation>{
        const car_situation = await this.car_situation_repository.findOne({ where: { id } });
        

        if(!car_situation){
            throw new NotFoundException(`car_situation with id ${id} not found`);
        }
        return car_situation;
        
    }

    async create_car_situation({type_situation}:CreateCarSituationDto){
        const car_situation = this.car_situation_repository.create({
            type_situation
        });

        return this.car_situation_repository.save(car_situation);

       
    }

    async delete_car_situation(id: number): Promise<void> {
        const car_situation: car_situation = await this.get_car_situation(id);
        await this.car_situation_repository.delete(car_situation);
    }

}



