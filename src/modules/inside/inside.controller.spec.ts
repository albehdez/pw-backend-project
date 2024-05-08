import { Test, TestingModule } from '@nestjs/testing';
import { InsideController } from './inside.controller';

describe('InsideController', () => {
  let controller: InsideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsideController],
    }).compile();

    controller = module.get<InsideController>(InsideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
