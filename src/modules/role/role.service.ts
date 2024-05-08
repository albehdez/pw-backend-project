/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { role } from './entities';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(role) private readonly role_repository:Repository<role>) {}

     async get_roles():Promise<role[]>{
        return await this.role_repository.find();
    }

    async get_role(id: number):Promise<role>{
        const role = await this.role_repository.findOne({ where: { id } });
        

        if(!role){
            throw new NotFoundException(`Role with id ${id} not found`);
        }
        return role;
        
    }

    async create_role({role}:CreateRoleDto){
        const newrole = this.role_repository.create({
            role
        });

        return this.role_repository.save(newrole);

       
    }

    async delete_role(id: number): Promise<void> {
        const role: role = await this.get_role(id);
        await this.role_repository.delete(role);
    }
}
