import { Test, TestingModule } from '@nestjs/testing';
import { DriverSituationService } from './driver_situation.service';

describe('DriverSituationService', () => {
  let service: DriverSituationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverSituationService],
    }).compile();

    service = module.get<DriverSituationService>(DriverSituationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
