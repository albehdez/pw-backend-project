import { Module } from '@nestjs/common';
import { DriverSituationController } from './driver_situation.controller';
import { DriverSituationService } from './driver_situation.service';
import { driver_situation } from './entities/driver_situation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([driver_situation])],
  controllers: [DriverSituationController],
  providers: [DriverSituationService]
})
export class DriverSituationModule {}
