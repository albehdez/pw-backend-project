import { Module } from '@nestjs/common';
import { RequestTransportController } from './request_transport.controller';
import { RequestTransportService } from './request_transport.service';

@Module({
  controllers: [RequestTransportController],
  providers: [RequestTransportService]
})
export class RequestTransportModule {}
