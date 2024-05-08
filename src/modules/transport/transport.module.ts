/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TransportService } from './transport.service';
import { TransportController } from './transport.controller';
import { driver } from '../driver/entities/driver.entitty';
import { transport } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { car } from '../car/entities';

@Module({
  imports: [TypeOrmModule.forFeature([car,driver,transport])],
  providers: [TransportService],
  controllers: [TransportController],
})
export class TransportModule {}
