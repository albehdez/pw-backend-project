import { Test, TestingModule } from '@nestjs/testing';
import { ChangeTypeController } from './change_type.controller';

describe('ChangeTypeController', () => {
  let controller: ChangeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChangeTypeController],
    }).compile();

    controller = module.get<ChangeTypeController>(ChangeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
