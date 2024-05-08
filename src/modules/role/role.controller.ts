/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { role } from './entities';
import { CreateRoleDto } from './dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController { constructor(private readonly role_service:RoleService){
    }

    @Get()
    get_cars_situation():Promise<role[]>{
        return this.role_service.get_roles();
    }

    @Get(':id')
    get_car_situation(@Param('id') id:number):Promise<role>{
        return this.role_service.get_role(id);
    }

    @Post()
    create_car_situation(@Body() type_situation: CreateRoleDto): Promise<role> {
        return this.role_service.create_role(type_situation);
    }


    @Delete(':id')
    delete_car_situation(@Param('id')id:number):Promise<void>{
        return this.role_service.delete_role(id);
    }}
