import { Test, TestingModule } from '@nestjs/testing';
import { ProgramingService } from './programing.service';

describe('ProgramingService', () => {
  let service: ProgramingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramingService],
    }).compile();

    service = module.get<ProgramingService>(ProgramingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
