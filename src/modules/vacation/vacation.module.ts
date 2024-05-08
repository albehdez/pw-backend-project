import { Module } from '@nestjs/common';
import { VacationController } from './vacation.controller';
import { VacationService } from './vacation.service';
import { vacation } from './entities/vacation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { driver } from '../driver/entities/driver.entitty';
import { driver_situation } from '../driver_situation/entities/driver_situation.entity';

@Module({
  imports: [VacationModule,TypeOrmModule.forFeature([driver,driver_situation,vacation])],
  controllers: [VacationController],
  providers: [VacationService]
})
export class VacationModule {}
