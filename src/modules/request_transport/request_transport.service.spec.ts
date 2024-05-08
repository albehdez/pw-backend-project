import { Test, TestingModule } from '@nestjs/testing';
import { RequestTransportService } from './request_transport.service';

describe('RequestTransportService', () => {
  let service: RequestTransportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestTransportService],
    }).compile();

    service = module.get<RequestTransportService>(RequestTransportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
