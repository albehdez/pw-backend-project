/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { country } from '../country/entities';
import { turistic_group } from './entities';
import { CreateTuristicGroupDto, UpdateTuristicGroupDto } from './dto';

@Injectable()
export class TuristicGroupService {
    constructor(@InjectRepository(turistic_group) private readonly turistic_groupRepository:Repository<turistic_group>,@InjectRepository(country) private readonly countryRepository:Repository<country>){}

    async get_turistic_groups():Promise<turistic_group[]>{
        return await this.turistic_groupRepository.find({relations:["country"]});
    }

    async get_turistic_group(id:number):Promise<turistic_group>{
        const turistic_group=await this.turistic_groupRepository.findOne({where:{id}, relations:['country']});

        if(!turistic_group){
             throw new NotFoundException(`Turistic Group with id ${id} not found`);
        }
        return turistic_group;
    }

    async create_turistic_group({number_turist,country}:CreateTuristicGroupDto): Promise<turistic_group>{
        const foundCountry = await this.countryRepository.findOne({ where: { name: country.name } });
        if (!foundCountry) {
            throw new NotFoundException(`Country with name ${country.name} not found`);
        }
        const newTuristic_group=this.turistic_groupRepository.create({number_turist,country:foundCountry});
        const savedTuristic_group=await this.turistic_groupRepository.save(newTuristic_group);

        return savedTuristic_group;
    }
    async update_turistic_group(id:number,{number_turist,country}:UpdateTuristicGroupDto):Promise<turistic_group>{
        const turistic_groupToUpdate= await this.get_turistic_group(id);
        if(!turistic_groupToUpdate){
            throw new NotFoundException(`Turistic Group with id ${id} not found`);
        }

        if(country){
            const foundCountry=await this.countryRepository.findOne({ where: { name: country.name } });
            if(!foundCountry){
                throw new NotFoundException(`Country with name ${country.name} not found`);
            }
            turistic_groupToUpdate.country=foundCountry
        }
        if(number_turist){
            turistic_groupToUpdate.number_turist=number_turist;
        }
        const updateTuristicGroup= await this.turistic_groupRepository.save(turistic_groupToUpdate);
        return updateTuristicGroup;
    }
    async delete_turistic_group(id: number): Promise<void> {
        const turistic_groupToDelete = await this.turistic_groupRepository.findOne({where: { id }});
    
        if (!turistic_groupToDelete) {
            throw new NotFoundException(`Turistic Group with id ${id} not found`);
        }
       
    
        await this.turistic_groupRepository.remove(turistic_groupToDelete);
    }
}