import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RequestController } from "./request.controller";
import { RequestService } from "./request.service";
import { request } from "./entities";
import { transport } from "../transport/entities";
import { request_transport } from "../request_transport/entities";
import { turistic_group } from "../turistic_group/entities";
import { programing } from "../programing/entities";
import { user } from "../user/entities";
import { TransportService } from "../transport/transport.service";
import { TransportModule } from "../transport/transport.module";
import { CarModule } from "../car/car.module";
import { DriverModule } from "../driver/driver.module";
import { RequestTransportModule } from "../request_transport/request_transport.module";
import { RoadmapModule } from "../roadmap/roadmap.module";
import { RoadmapRequestModule } from "../roadmap_request/roadmap_request.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      request,
      transport,
      request_transport,
      turistic_group,
      programing,
      user,
    ]),
    TransportModule,
    CarModule,
    DriverModule,
    RequestTransportModule,
    RoadmapModule,
    RoadmapRequestModule,
  ],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
