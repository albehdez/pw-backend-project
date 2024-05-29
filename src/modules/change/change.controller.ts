/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChangeService } from './change.service';
import { change } from './entities';
import { CreateChangeDto } from './dto';
import { Auth } from '../common/decorators/auth.decorador';
import { Role } from '../common/enums/role.enum';

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("change")
export class ChangeController {
  constructor(private readonly changeService: ChangeService) {}

  @Get()
  get_changes(): Promise<change[]> {
    return this.changeService.get_changes();
  }

  @Get(":id")
  get_change(@Param("id") id: number): Promise<change> {
    return this.changeService.get_change(id);
  }

  @Post()
  create_change(@Body() createChangeDto: CreateChangeDto): Promise<change> {
    return this.changeService.create_change(createChangeDto);
  }

  @Delete(":id")
  delete_change(@Param("id") id: number): Promise<void> {
    return this.changeService.delete_change(id);
  }
}

