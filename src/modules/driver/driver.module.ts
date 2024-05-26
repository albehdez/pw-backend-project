import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { driver } from './entities/driver.entitty';
import { TypeOrmModule } from '@nestjs/typeorm';
import { driver_situation } from '../driver_situation/entities/driver_situation.entity';
import { driver_category } from '../driver_category/entities';
import { vacation } from '../vacation/entities/vacation.entity';
import { car } from '../car/entities';
import { transport } from '../transport/entities';


@Module({
  imports: [TypeOrmModule.forFeature([driver,driver_situation,driver_category,vacation,car,transport])],
  controllers: [DriverController],
  providers: [DriverService]
})
export class DriverModule {}
