import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { driver_situation } from './entities/driver_situation.entity';
import { Repository } from 'typeorm';
import { CreateDriverSituationDto } from './dto';

@Injectable()
export class DriverSituationService {
    constructor(@InjectRepository(driver_situation) private readonly driver_situation_repository:Repository<driver_situation>) {}

    async get_drivers_situation():Promise<driver_situation[]>{
        return await this.driver_situation_repository.find();
    }

    async get_driver_situation(id: number):Promise<driver_situation>{
        const driver_situation = await this.driver_situation_repository.findOne({ where: { id } });
        ;

        if(!driver_situation){
            throw new NotFoundException(`driver_situation with id ${id} not found`);
        }
        return driver_situation;
        
    }

    async create_driver_situation({type_situation}:CreateDriverSituationDto){
        const driver_situation = this.driver_situation_repository.create({
            type_situation
        });

        return this.driver_situation_repository.save(driver_situation);

       
    }

    async delete_driver_situation(id: number): Promise<void> {
        const driver_situation: driver_situation = await this.get_driver_situation(id);
        await this.driver_situation_repository.delete(driver_situation);
    }
}
