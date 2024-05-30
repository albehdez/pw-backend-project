import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { DriverSituationService } from "./driver_situation.service";
import { driver_situation } from "./entities/driver_situation.entity";
import { CreateCarSituationDto } from "../car_situation/dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("driver-situation")
export class DriverSituationController {
  constructor(
    private readonly driver_situation_service: DriverSituationService
  ) {}

  @Get()
  get_drivers_situation(): Promise<driver_situation[]> {
    return this.driver_situation_service.get_drivers_situation();
  }

  @Get(":id")
  get_driver_situation(@Param("id") id: number): Promise<driver_situation> {
    return this.driver_situation_service.get_driver_situation(id);
  }

  @Post()
  create_driver_situation(
    @Body() type_situation: CreateCarSituationDto
  ): Promise<driver_situation> {
    return this.driver_situation_service.create_driver_situation(
      type_situation
    );
  }

  @Delete(":id")
  delete_driver_situation(@Param("id") id: number): Promise<void> {
    return this.driver_situation_service.delete_driver_situation(id);
  }
}
