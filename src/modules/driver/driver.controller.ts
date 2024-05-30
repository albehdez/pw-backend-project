import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Delete,
  Get,
  Res,
  Put,
} from "@nestjs/common";
import { DriverService } from "./driver.service";
import { CreateDriverDto, UpdateDriverDto } from "./dto";
import { driver } from "./entities/driver.entitty";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("driver")
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  get_drivers(): Promise<driver[]> {
    return this.driverService.get_drivers();
  }

  @Get(":id")
  get_driver(@Param("id") id: number): Promise<driver> {
    return this.driverService.get_driver(id);
  }

  @Put("available")
  get_driver_available(
    @Body("plate") plate: string,
    @Body("date") date: Date
  ): Promise<driver[]> {
    return this.driverService.getDriverAvailable(plate, date);
  }

  @Post()
  create_driver(@Body() createDriverDto: CreateDriverDto): Promise<driver> {
    return this.driverService.create_driver(createDriverDto);
  }

  @Put(":id")
  update_driver(
    @Param("id") id: number,
    @Body() updateDriverDto: UpdateDriverDto
  ) {
    return this.driverService.update_driver(id, updateDriverDto);
  }

  @Delete(":id")
  delete_driver(@Param("id") id: number): Promise<void> {
    return this.driverService.delete_driver(id);
  }

  @Get("pdf/generate")
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.driverService.generatePDF();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=example.pdf",
      "Content-Length": buffer.length,
    });

    res.end(buffer);
  }
}
