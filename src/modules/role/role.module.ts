/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { role } from './entities';
import { RoleService } from './role.service';

@Module({ 
  imports:[TypeOrmModule.forFeature([role])],
    controllers:[RoleController],
    providers:[RoleService]
})
export class RoleModule {
  
}
