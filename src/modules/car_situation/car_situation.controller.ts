/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CarSituationService } from "./car_situation.service";
import { car_situation } from "./entities/car_situation.entity";
import { CreateCarSituationDto } from "./dto/create-car_situation.dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("car-situation")
export class CarSituationController {
  constructor(private readonly car_situation_service: CarSituationService) {}

  @Get()
  get_cars_situation(): Promise<car_situation[]> {
    return this.car_situation_service.get_cars_situation();
  }

  @Get(":id")
  get_car_situation(@Param("id") id: number): Promise<car_situation> {
    return this.car_situation_service.get_car_situation(id);
  }

  @Post()
  create_car_situation(
    @Body() type_situation: CreateCarSituationDto
  ): Promise<car_situation> {
    return this.car_situation_service.create_car_situation(type_situation);
  }

  @Delete(":id")
  delete_car_situation(@Param("id") id: number): Promise<void> {
    return this.car_situation_service.delete_car_situation(id);
  }
}
