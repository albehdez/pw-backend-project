import { Module } from '@nestjs/common';
import { RequestTransportController } from './request_transport.controller';
import { RequestTransportService } from './request_transport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { request } from '../request/entities';
import { transport } from '../transport/entities';
import { request_transport } from './entities';

@Module({
  imports:[TypeOrmModule.forFeature([request,transport,request_transport])],
  controllers: [RequestTransportController],
  providers: [RequestTransportService]
})
export class RequestTransportModule {}
