import { Test, TestingModule } from '@nestjs/testing';
import { RoadmapRequestController } from './roadmap_request.controller';

describe('RoadmapRequestController', () => {
  let controller: RoadmapRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadmapRequestController],
    }).compile();

    controller = module.get<RoadmapRequestController>(RoadmapRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
