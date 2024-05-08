import { Test, TestingModule } from '@nestjs/testing';
import { DriverCategoryService } from './driver_category.service';

describe('DriverCategoryService', () => {
  let service: DriverCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverCategoryService],
    }).compile();

    service = module.get<DriverCategoryService>(DriverCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
