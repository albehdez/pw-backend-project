import { Test, TestingModule } from '@nestjs/testing';
import { ProgramingTypeController } from './programing_type.controller';

describe('ProgramingTypeController', () => {
  let controller: ProgramingTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramingTypeController],
    }).compile();

    controller = module.get<ProgramingTypeController>(ProgramingTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
