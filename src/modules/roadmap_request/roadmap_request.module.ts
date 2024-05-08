import { Module } from '@nestjs/common';
import { RoadmapRequestController } from './roadmap_request.controller';
import { RoadmapRequestService } from './roadmap_request.service';

@Module({
  controllers: [RoadmapRequestController],
  providers: [RoadmapRequestService]
})
export class RoadmapRequestModule {}
