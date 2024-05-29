import { Controller, Delete, Get, Param, Res } from "@nestjs/common";
import { VacationService } from "./vacation.service";
import { vacation } from "./entities/vacation.entity";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("vacation")
export class VacationController {
  constructor(private readonly vacation_service: VacationService) {}

  @Get()
  get_drivers_vacation(): Promise<vacation[]> {
    return this.vacation_service.get_drivers_vacation();
  }

  @Get(":id")
  get_driver_vacation(@Param("id") id: number): Promise<vacation> {
    return this.vacation_service.get_driver_vacation(id);
  }

  @Delete(":id")
  delete_driver_vacation(@Param("id") id: number): Promise<void> {
    return this.vacation_service.delete_driver_vacation(id);
  }

  @Get("pdf/generate")
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.vacation_service.generatePDF();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=example.pdf",
      "Content-Length": buffer.length,
    });

    res.end(buffer);
  }
}
