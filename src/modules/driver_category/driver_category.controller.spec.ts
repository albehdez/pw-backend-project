import { Test, TestingModule } from '@nestjs/testing';
import { DriverCategoryController } from './driver_category.controller';

describe('DriverCategoryController', () => {
  let controller: DriverCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverCategoryController],
    }).compile();

    controller = module.get<DriverCategoryController>(DriverCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
