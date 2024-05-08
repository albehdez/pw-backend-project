import { Test, TestingModule } from '@nestjs/testing';
import { ProgramingController } from './programing.controller';

describe('ProgramingController', () => {
  let controller: ProgramingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramingController],
    }).compile();

    controller = module.get<ProgramingController>(ProgramingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
