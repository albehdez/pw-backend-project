import { Module } from '@nestjs/common';
import { DriverCategoryController } from './driver_category.controller';
import { DriverCategoryService } from './driver_category.service';
import { driver_category } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([driver_category])],
  controllers: [DriverCategoryController],
  providers: [DriverCategoryService]
})
export class DriverCategoryModule {}
