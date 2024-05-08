/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { change_type } from './entities';
import { Repository } from 'typeorm';
import { CreateChangeTypeDto } from './dto';

@Injectable()
export class ChangeTypeService {
    constructor(@InjectRepository(change_type) private readonly change_type_repository:Repository<change_type>) {}


    async get_changes_type():Promise<change_type[]>{
        return await this.change_type_repository.find();
    }

    async get_change_type(id: number):Promise<change_type>{
        const change_type = await this.change_type_repository.findOne({ where: { id } });
        

        if(!change_type){
            throw new NotFoundException(`Change Type with id ${id} not found`);
        }
        return change_type;
        
    }

    async create_change_type({change_type}:CreateChangeTypeDto){
        const change = this.change_type_repository.create({
            change_type
        });

        return this.change_type_repository.save(change);

       
    }

    async delete_change_type(id: number): Promise<void> {
        const change_type: change_type = await this.get_change_type(id);
        await this.change_type_repository.delete(change_type);
    }
}
