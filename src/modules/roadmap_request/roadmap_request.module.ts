import { Module } from '@nestjs/common';
import { RoadmapRequestController } from './roadmap_request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { request } from '../request/entities';
import { roadmap } from '../roadmap/entities';
import { roadmap_request } from './entities';
import { RoadmapRequestService } from './roadmap_request.service';

@Module({
   imports: [RoadmapRequestModule,TypeOrmModule.forFeature([request,roadmap,roadmap_request])],
    controllers:[RoadmapRequestController],
    providers:[RoadmapRequestService]
})
export class RoadmapRequestModule {}
