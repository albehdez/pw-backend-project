/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProgramingTypeService } from "./programing_type.service";
import { programing_type } from "./entities";
import { CreateProgramingTypeDto } from "./dto/crate_programing_type.dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("programing-type")
export class ProgramingTypeController {
  constructor(
    private readonly programing_type_service: ProgramingTypeService
  ) {}

  @Get()
  get_programings_type(): Promise<programing_type[]> {
    return this.programing_type_service.get_programings_type();
  }

  @Get(":id")
  get_programing_type(@Param("id") id: number): Promise<programing_type> {
    return this.programing_type_service.get_programing_type(id);
  }

  @Post()
  create_programing_type(
    @Body() programing_type: CreateProgramingTypeDto
  ): Promise<programing_type> {
    return this.programing_type_service.create_programing_type(programing_type);
  }

  @Delete(":id")
  delete_programing_type(@Param("id") id: number): Promise<void> {
    return this.programing_type_service.delete_programing_type(id);
  }
}
