import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Res,
} from "@nestjs/common";
import { CarService } from "./car.service";
import { car } from "./entities";
import { CreateCarDto, UpdateCarDto } from "./dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Manager)
@Controller("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  get_cars(): Promise<car[]> {
    return this.carService.get_cars();
  }

  @Get("available")
  get_cars_available(@Param("date")date:Date): Promise<car[]> {
    return this.carService.getCarsAvailableAndInTransport(date);
  }

  @Get("simple")
  get_cars_simple(): Promise<
    {
      brand: string;
      number_seats: number;
      km_available: number;
      license_plate: string;
      car_situation: string;
    }[]
  > {
    return this.carService.get_cars_simple();
  }

  @Get(":id")
  get_car(@Param("id") id: number): Promise<car> {
    return this.carService.get_car(id);
  }

  @Get("simple/:id")
  get_car_simple(@Param("id") id: number): Promise<
    {
      brand: string;
      number_seats: number;
      km_available: number;
      license_plate: string;
      car_situation: string;
    }[]
  > {
    return this.carService.get_car_simple(id);
  }

  @Post()
  create_car(@Body() createCarDto: CreateCarDto): Promise<car> {
    return this.carService.create_car(createCarDto);
  }

  @Patch(":id")
  update_car(@Param("id") id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update_car(id, updateCarDto);
  }

  @Delete(":id")
  delete_car(@Param("id") id: number): Promise<void> {
    return this.carService.delete_car(id);
  }

  @Get("pdf/generate")
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.carService.generatePDF();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=example.pdf",
      "Content-Length": buffer.length,
    });

    res.end(buffer);
  }

  /*  @Get('pdf/download')
  async generatePdf() {
    return this.carService.generatePdf();
  } */
}
