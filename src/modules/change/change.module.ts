/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChangeService } from './change.service';
import { ChangeController } from './change.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { change } from './entities';
import { change_type } from '../change_type/entities';
import { request } from '../request/entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([change,change_type,request])],
  providers: [ChangeService],
  controllers: [ChangeController],
})
export class ChangeModule {}
