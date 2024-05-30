/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ChangeTypeService } from "./change_type.service";
import { change_type } from "./entities";
import { CreateChangeTypeDto } from "./dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("change-type")
export class ChangeTypeController {
  constructor(private readonly change_type_service: ChangeTypeService) {}

  @Get()
  get_changes_type(): Promise<change_type[]> {
    return this.change_type_service.get_changes_type();
  }

  @Get(":id")
  get_change_type(@Param("id") id: number): Promise<change_type> {
    return this.change_type_service.get_change_type(id);
  }

  @Post()
  create_changes_type(
    @Body() createChangeTypeDto: CreateChangeTypeDto
  ): Promise<change_type> {
    return this.change_type_service.create_change_type(createChangeTypeDto);
  }

  @Delete(":id")
  delete_changes_type(@Param("id") id: number): Promise<void> {
    return this.change_type_service.delete_change_type(id);
  }
}
