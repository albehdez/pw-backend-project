import { Test, TestingModule } from '@nestjs/testing';
import { CarSituationController } from './car_situation.controller';

describe('CarSituationController', () => {
  let controller: CarSituationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarSituationController],
    }).compile();

    controller = module.get<CarSituationController>(CarSituationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
