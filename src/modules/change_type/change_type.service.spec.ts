import { Test, TestingModule } from '@nestjs/testing';
import { ChangeTypeService } from './change_type.service';

describe('ChangeTypeService', () => {
  let service: ChangeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangeTypeService],
    }).compile();

    service = module.get<ChangeTypeService>(ChangeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
