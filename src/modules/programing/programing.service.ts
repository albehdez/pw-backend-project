/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { programing } from './entities';
import { programing_type } from '../programing_type/entities';
import { CreateProgramingDto, UpdateProgramingDto } from './dto';

@Injectable()
export class ProgramingService {

    constructor(@InjectRepository(programing) private readonly programingRepository: Repository<programing>,@InjectRepository(programing_type) private readonly programing_typeRepository: Repository<programing_type>){}

    async get_programings():Promise<programing[]>{
        return await this.programingRepository.find({relations:['programing_type']});
    }

    async get_programing(id:number):Promise<programing>{
        const foundPrograming = await this.programingRepository.findOne({where:{id},relations:['programing_type']});
    if(foundPrograming){
        throw new NotFoundException(`Programing with id ${id} not found`);
    }
    return foundPrograming;
    }
    
    async create_programing({type,start_time,end_time,description,km_to_travel,delay}:CreateProgramingDto) {
        const foundProgramingType= await this.programing_typeRepository.findOne({where:{programing_type:type.programing_type}});
         if (!foundProgramingType) {
            throw new NotFoundException(`Programing type with type ${type.programing_type} not found`);
        }
         if (end_time <= start_time) {
        throw new NotFoundException('End time must be after start time');
        }
        const newPrograming=this.programingRepository.create({programing_type:foundProgramingType,start_time,end_time,description,km_to_travel,delay});
        const savePrograming=await this.programingRepository.save(newPrograming);
        return savePrograming
        }
    async update_programing(id:number,{type,start_time,end_time,description,km_to_travel,delay}:UpdateProgramingDto){
        const programingToUpdate= await this.get_programing(id);
        if(!programingToUpdate){
            throw new NotFoundException(`Programing with id ${id} not found`)
        }
         if (end_time <= start_time) {
        throw new NotFoundException('End time must be after start time');
        }
        if(type){
           const foundProgramingType= await this.programing_typeRepository.findOne({where:{programing_type:type.programing_type}});
         if (!foundProgramingType) {
            throw new NotFoundException(`Programing type with type ${type.programing_type} not found`);
        }
        programingToUpdate.programing_type=foundProgramingType; 
        }
        if(start_time){
            programingToUpdate.start_time=start_time;
        }
        if(end_time){
             programingToUpdate.end_time=end_time;
        }
        if(description){
             programingToUpdate.description=description;
        }
        if(km_to_travel){
             programingToUpdate.km_to_travel=km_to_travel;
        }
        if(delay){
             programingToUpdate.delay=delay;
        }
        const UpdatedPrograming=await this.programingRepository.save(programingToUpdate);

        return UpdatedPrograming;
    }

    async delete_programing(id: number):Promise<void>{
        const programingToDelete= await this.programingRepository.findOne({where:{id}});

        if(!programingToDelete){
             throw new NotFoundException(`Programing with id ${id} not found`)
        }
        await this.programingRepository.remove(programingToDelete);


    }
}

