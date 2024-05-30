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
import { ProgramingService } from "./programing.service";
import { programing } from "./entities";
import { CreateProgramingDto, UpdateProgramingDto } from "./dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("programing")
export class ProgramingController {
  constructor(private readonly programingService: ProgramingService) {}

  @Get()
  get_programings(): Promise<programing[]> {
    return this.programingService.get_programings();
  }

  @Get(":id")
  get_programing(@Param("id") id: number): Promise<programing> {
    return this.programingService.get_programing(id);
  }

  @Post()
  create_programing(
    @Body() createProgramingDto: CreateProgramingDto
  ): Promise<programing> {
    return this.programingService.create_programing(createProgramingDto);
  }

  @Put(":id")
  update_programing(
    @Param("id") id: number,
    @Body() updateProgramingDto: UpdateProgramingDto
  ) {
    return this.programingService.update_programing(id, updateProgramingDto);
  }

  @Delete(":id")
  delete_programing(@Param("id") id: number): Promise<void> {
    return this.programingService.delete_programing(id);
  }

  @Get("pdf/generate")
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.programingService.generatePDF();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=example.pdf",
      "Content-Length": buffer.length,
    });

    res.end(buffer);
  }

  @Post("email")
  async sendProgramingInfoByEmail(
    @Body("email") userEmail: string
  ): Promise<void> {
    await this.programingService.sendProgramingInfoEmailAndGeneratePdf(
      userEmail
    );
  }
}
