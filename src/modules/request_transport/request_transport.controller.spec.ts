import { Test, TestingModule } from '@nestjs/testing';
import { RequestTransportController } from './request_transport.controller';

describe('RequestTransportController', () => {
  let controller: RequestTransportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestTransportController],
    }).compile();

    controller = module.get<RequestTransportController>(RequestTransportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
