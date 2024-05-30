import { Controller, Delete, Get, Param, Res } from "@nestjs/common";
import { InsideService } from "./inside.service";
import { inside } from "./entities/inside.entity";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("inside")
export class InsideController {
  constructor(private readonly inside_service: InsideService) {}

  @Get()
  get_cars_inside(): Promise<inside[]> {
    return this.inside_service.get_cars_inside();
  }

  @Get(":id")
  get_car_inside(@Param("id") id: number): Promise<inside> {
    return this.inside_service.get_car_inside(id);
  }

  @Delete(":id")
  delete_car_inside(@Param("id") id: number): Promise<void> {
    return this.inside_service.delete_car_inside(id);
  }

  @Get("pdf/generate")
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.inside_service.generatePDF();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=example.pdf",
      "Content-Length": buffer.length,
    });

    res.end(buffer);
  }
}
