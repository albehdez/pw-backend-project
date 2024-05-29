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
} from "@nestjs/common";
import { transport } from "./entities";
import { CreateTransportDto, UpdateTransportDto } from "./dto";
import { TransportService } from "./transport.service";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("transport")
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Get()
  get_transports(): Promise<transport[]> {
    return this.transportService.get_transports();
  }

  @Get(":id")
  get_transport(@Param("id") id: number): Promise<transport> {
    return this.transportService.get_transport(id);
  }

  @Post()
  create_transport(
    @Body() createTransportDto: CreateTransportDto
  ): Promise<transport> {
    return this.transportService.create_transport(createTransportDto);
  }

  @Put(":id")
  update_transport(
    @Param("id") id: number,
    @Body() updateTransportDto: UpdateTransportDto
  ) {
    return this.transportService.update_transport(id, updateTransportDto);
  }

  @Delete(":id")
  delete_transport(@Param("id") id: number): Promise<void> {
    return this.transportService.delete_transport(id);
  }
}
