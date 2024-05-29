import { Controller, Delete, Get, Param } from "@nestjs/common";
import { request_transport } from "./entities";
import { RequestTransportService } from "./request_transport.service";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("request-transport")
export class RequestTransportController {
  constructor(
    private readonly request_transport_service: RequestTransportService
  ) {}
  @Get()
  get_request_transports(): Promise<request_transport[]> {
    return this.request_transport_service.get_request_transports();
  }

  @Get(":id")
  get_request_transport(@Param("id") id: number): Promise<request_transport> {
    return this.request_transport_service.get_request_transport(id);
  }

  @Delete(":id")
  delete_request_transport(@Param("id") id: number): Promise<void> {
    return this.request_transport_service.delete_request_transport(id);
  }
}
