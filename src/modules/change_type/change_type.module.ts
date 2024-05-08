/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { change_type } from './entities';
import { ChangeTypeController } from './change_type.controller';
import { ChangeTypeService } from './change_type.service';

@Module({
     imports:[TypeOrmModule.forFeature([change_type])],
    controllers:[ChangeTypeController],
    providers:[ChangeTypeService]
})
export class ChangeTypeModule {}
