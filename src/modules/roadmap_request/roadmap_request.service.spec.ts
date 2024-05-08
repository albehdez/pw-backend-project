import { Test, TestingModule } from '@nestjs/testing';
import { RoadmapRequestService } from './roadmap_request.service';

describe('RoadmapRequestService', () => {
  let service: RoadmapRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadmapRequestService],
    }).compile();

    service = module.get<RoadmapRequestService>(RoadmapRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
