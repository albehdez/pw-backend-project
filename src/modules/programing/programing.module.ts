/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProgramingService } from './programing.service';
import { ProgramingController } from './programing.controller';
import { programing } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { programing_type } from '../programing_type/entities';

@Module({
     imports: [TypeOrmModule.forFeature([programing,programing_type])],
    controllers:[ProgramingController],
    providers:[ProgramingService]
     
})
export class ProgramingModule {}
