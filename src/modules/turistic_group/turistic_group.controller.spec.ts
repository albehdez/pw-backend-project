import { Test, TestingModule } from '@nestjs/testing';
import { TuristicGroupController } from './turistic_group.controller';

describe('TuristicGroupController', () => {
  let controller: TuristicGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuristicGroupController],
    }).compile();

    controller = module.get<TuristicGroupController>(TuristicGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
