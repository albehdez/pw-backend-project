import { Test, TestingModule } from '@nestjs/testing';
import { CarSituationService } from './car_situation.service';

describe('CarSituationService', () => {
  let service: CarSituationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarSituationService],
    }).compile();

    service = module.get<CarSituationService>(CarSituationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
