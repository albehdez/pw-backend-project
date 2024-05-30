import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { DriverCategoryService } from "./driver_category.service";
import { driver_category } from "./entities";
import { CreateDriverCategoryDto } from "./dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("driver-category")
export class DriverCategoryController {
  constructor(
    private readonly driver_category_service: DriverCategoryService
  ) {}

  @Get()
  get_drivers_category(): Promise<driver_category[]> {
    return this.driver_category_service.get_drivers_category();
  }

  @Get(":id")
  get_driver_category(@Param("id") id: number): Promise<driver_category> {
    return this.driver_category_service.get_driver_category(id);
  }

  @Post()
  create_driver_category(
    @Body() type_situation: CreateDriverCategoryDto
  ): Promise<driver_category> {
    return this.driver_category_service.create_driver_category(type_situation);
  }

  @Delete(":id")
  delete_driver_category(@Param("id") id: number): Promise<void> {
    return this.driver_category_service.delete_driver_category(id);
  }
}
