/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { role } from "./entities";
import { CreateRoleDto } from "./dto";
import { RoleService } from "./role.service";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("role")
export class RoleController {
  constructor(private readonly role_service: RoleService) {}

  @Get()
  get_roles(): Promise<role[]> {
    return this.role_service.get_roles();
  }

  @Get(":id")
  get_role(@Param("id") id: number): Promise<role> {
    return this.role_service.get_role(id);
  }

  @Post()
  create_role(@Body() type_situation: CreateRoleDto): Promise<role> {
    return this.role_service.create_role(type_situation);
  }

  @Delete(":id")
  delete_role(@Param("id") id: number): Promise<void> {
    return this.role_service.delete_role(id);
  }
}
