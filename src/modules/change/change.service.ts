/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { change } from './entities';
import { Repository } from 'typeorm';
import { change_type } from '../change_type/entities';
import { request } from '../request/entities/request.entity';
import { CreateChangeDto} from './dto';

@Injectable()
export class ChangeService {
    

    constructor(@InjectRepository(change) private readonly changeRepository: Repository<change>,
                @InjectRepository(change_type) private readonly change_typeRepository: Repository<change_type>,
                @InjectRepository(request) private readonly requestRepository: Repository<request>) {}

    async get_changes(): Promise<change[]> {
        return await this.changeRepository.find({ relations: ['change_type','request'] });
    }

    async get_change(id: number): Promise<change> {
        const foundCar = await this.changeRepository.findOne({ where: { id },relations:['change_type','request'] });
        if (!foundCar) {
            throw new NotFoundException(`Change with id ${id} not found`);
        }
        return foundCar;
    }

    async create_change({ change_type, description, request  }: CreateChangeDto): Promise<change> {
        const foundType = await this.change_typeRepository.findOne({ where: { change_type: change_type.change_type } });
        if (!foundType) {
            throw new NotFoundException(`Change Type situation with type ${change_type.change_type} not found`);
        }
    
        const foundRequest = await this.requestRepository.findOne({ where: { id: request.id } });
        if (foundRequest) {
            throw new NotFoundException(`Request with id ${request.id} already exists`);
        }
    
        const newChange = this.changeRepository.create({change_type: foundType,description,request:foundRequest});
        const savedChange = await this.changeRepository.save(newChange);
        

        return savedChange;
    }   

    
    async delete_change(id: number): Promise<void> {
        const changeToDelete = await this.changeRepository.findOne({where: { id }});
    
        if (!changeToDelete) {
            throw new NotFoundException(`Change with id ${id} not found`);
        }   
    
        await this.changeRepository.remove(changeToDelete);
    }
    
}
