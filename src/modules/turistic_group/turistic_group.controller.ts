/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { TuristicGroupService } from "./turistic_group.service";
import { turistic_group } from "./entities";
import { CreateTuristicGroupDto, UpdateTuristicGroupDto } from "./dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("turistic_group")
export class TuristicGroupController {
  constructor(private readonly turistic_groupService: TuristicGroupService) {}

  @Get()
  get_turistic_groups(): Promise<turistic_group[]> {
    return this.turistic_groupService.get_turistic_groups();
  }

  @Get(":id")
  get_turistic_group(@Param("id") id: number): Promise<turistic_group> {
    return this.turistic_groupService.get_turistic_group(id);
  }

  @Post()
  create_turistic_group(
    @Body() createTuristicGroupDto: CreateTuristicGroupDto
  ): Promise<turistic_group> {
    return this.turistic_groupService.create_turistic_group(
      createTuristicGroupDto
    );
  }

  @Put(":id")
  update_turistic_group(
    @Param("id") id: number,
    @Body() updateTuristicGroupDto: UpdateTuristicGroupDto
  ) {
    return this.turistic_groupService.update_turistic_group(
      id,
      updateTuristicGroupDto
    );
  }

  @Delete(":id")
  delete_turistic_group(@Param("id") id: number): Promise<void> {
    return this.turistic_groupService.delete_turistic_group(id);
  }

  @Get("pdf/generate")
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.turistic_groupService.generatePDF();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=example.pdf",
      "Content-Length": buffer.length,
    });

    res.end(buffer);
  }
}
