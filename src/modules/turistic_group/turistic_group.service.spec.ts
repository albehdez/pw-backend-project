import { Test, TestingModule } from '@nestjs/testing';
import { TuristicGroupService } from './turistic_group.service';

describe('TuristicGroupService', () => {
  let service: TuristicGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuristicGroupService],
    }).compile();

    service = module.get<TuristicGroupService>(TuristicGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
