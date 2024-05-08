/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TuristicGroupService } from './turistic_group.service';
import { TuristicGroupController } from './turistic_group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { turistic_group } from './entities';
import { country } from '../country/entities';

@Module({
  imports:[TypeOrmModule.forFeature([turistic_group,country])],
  providers: [TuristicGroupService],
  controllers: [TuristicGroupController]
})
export class TuristicGroupModule {}
