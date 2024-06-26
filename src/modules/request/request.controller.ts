import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { RequestService } from "./request.service";
import { request } from "./entities";
import { CreateProgramingDto } from "../programing/dto";
import { CreateTransportDto } from "../transport/dto";
import { CreateRequestDto, UpdateRequestDto } from "./dto";
import { Auth } from "../common/decorators/auth.decorador";
import { Role } from "../common/enums/role.enum";

@Auth([Role.Manager, Role.Admin])
@Controller("request")
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  get_requests(): Promise<request[]> {
    return this.requestService.get_requests();
  }

  @Get(":id")
  get_request(@Param("id") id: number): Promise<request> {
    return this.requestService.get_request(id);
  }

  @Get("solved/request")
  get_solved_requests(): Promise<request[]> {
    return this.requestService.get_solved_requests();
  }

  @Get("no/solved/request")
  get_no_solved_requests(): Promise<request[]> {
    return this.requestService.get_no_solved_requests();
  }

  @Put("attend")
  get_requests_attend(): Promise<void> {
    return this.requestService.attend_request();
  }

  @Post()
  create_request(
    @Body() createrequestDto: CreateRequestDto,
    createtransportDto: CreateTransportDto
  ): Promise<request> {
    return this.requestService.create_request(createrequestDto);
  }

  @Put(":id")
  update_request(
    @Param("id") id: number,
    @Body() updateRequestDto: UpdateRequestDto
  ) {
    return this.requestService.update_request(id, updateRequestDto);
  }

  @Delete(":id")
  delete_request(@Param("id") id: number): Promise<void> {
    return this.requestService.delete_request(id);
  }
}
