/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RoadmapService } from './roadmap.service';
import { RoadmapController } from './roadmap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { roadmap } from './entities';
import { car } from '../car/entities';

@Module({
  providers: [RoadmapService],
  controllers: [RoadmapController],
   imports: [TypeOrmModule.forFeature([roadmap,car])],
})
export class RoadmapModule {}
