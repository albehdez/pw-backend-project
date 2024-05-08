/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { programing_type } from './entities';
import { ProgramingTypeController } from './programing_type.controller';
import { ProgramingTypeService } from './programing_type.service';

@Module({
    imports:[TypeOrmModule.forFeature([programing_type])],
    controllers:[ProgramingTypeController],
    providers:[ProgramingTypeService]
})
export class ProgramingTypeModule {}
