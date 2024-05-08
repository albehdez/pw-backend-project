import { Module } from '@nestjs/common';
import { car } from '../car/entities/car.entity';
import { car_situation } from '../car_situation/entities/car_situation.entity';
import { inside } from './entities/inside.entity';
import { InsideController } from './inside.controller';
import { InsideService } from 'src/modules/inside/inside.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [InsideModule,TypeOrmModule.forFeature([car,car_situation,inside])],
    controllers:[InsideController],
    providers:[InsideService]
})
export class InsideModule {}
