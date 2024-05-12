/* eslint-disable prettier/prettier */
import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './modules/car/car.module';
import { InsideModule } from './modules/inside/inside.module';
import { CarSituationModule } from './modules/car_situation/car_situation.module';
import { DriverModule } from './modules/driver/driver.module';
import { DriverSituationModule } from './modules/driver_situation/driver_situation.module';
import { DriverCategoryModule } from './modules/driver_category/driver_category.module';
import { VacationModule } from './modules/vacation/vacation.module';
import { ProgramingModule } from './modules/programing/programing.module';
import { ProgramingTypeModule } from './modules/programing_type/programing_type.module';
import { CountryModule } from './modules/country/country.module';
import { TuristicGroupModule } from './modules/turistic_group/turistic_group.module';
import { RoleModule } from './modules/role/role.module';
import { ChangeTypeModule } from './modules/change_type/change_type.module';
import { ChangeModule } from './modules/change/change.module';
import { RequestModule } from './modules/request/request.module';
import { RequestTransportModule } from './modules/request_transport/request_transport.module';
import { RoadmapModule } from './modules/roadmap/roadmap.module';
import { RoadmapRequestModule } from './modules/roadmap_request/roadmap_request.module';
import { TransportModule } from './modules/transport/transport.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';




@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'cocoloco02',
    database:'pw_bd_proyecto_final',
    autoLoadEntities:true,
    synchronize:true,

  }),CarModule,InsideModule,CarSituationModule, DriverModule, DriverSituationModule, DriverCategoryModule, VacationModule, ProgramingModule, ProgramingTypeModule, CountryModule, TuristicGroupModule, RoleModule, ChangeTypeModule, ChangeModule, RequestModule, RequestTransportModule, RoadmapModule, RoadmapRequestModule, TransportModule, UserModule, AuthModule],
  controllers: [],
  providers: [],

  

})
export class AppModule {}
