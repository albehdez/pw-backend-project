import { Injectable, NotFoundException } from '@nestjs/common';
import { driver_category } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDriverCategoryDto } from './dto';
import { Repository } from 'typeorm';

@Injectable()
export class DriverCategoryService {
    constructor(@InjectRepository(driver_category) private readonly driver_category_repository:Repository<driver_category>) {}

    async get_drivers_category():Promise<driver_category[]>{
        return await this.driver_category_repository.find();
    }

    async get_driver_category(id: number):Promise<driver_category>{
        const driver_category = await this.driver_category_repository.findOne({ where: { id } });
        ;

        if(!driver_category){
            throw new NotFoundException(`driver_category with id ${id} not found`);
        }
        return driver_category;
        
    }

    async create_driver_category({type_category}:CreateDriverCategoryDto){
        const driver_situation = this.driver_category_repository.create({
            type_category
        });

        return this.driver_category_repository.save(driver_situation);

       
    }

    async delete_driver_category(id: number): Promise<void> {
        const driver_situation: driver_category = await this.get_driver_category(id);
        await this.driver_category_repository.delete(driver_situation);
    }
}
