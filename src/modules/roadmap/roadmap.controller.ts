/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoadmapService } from './roadmap.service';
import { roadmap } from './entities';
import { CreateRoadmapDto } from './dto';
import { Role } from '../common/enums/role.enum';
import { Auth } from '../common/decorators/auth.decorador';

@Auth(Role.Admin)
@Auth(Role.Manager)
@Controller("roadmap")
export class RoadmapController {
  constructor(private readonly roadmapService: RoadmapService) {}

  @Get()
  get_raodmaps(): Promise<roadmap[]> {
    return this.roadmapService.get_raodmaps();
  }

  @Get(":id")
  get_raodmap(@Param("id") id: number): Promise<roadmap> {
    return this.roadmapService.get_raodmap(id);
  }

  @Post()
  create_roadmap(@Body() createCarDto: CreateRoadmapDto): Promise<roadmap> {
    return this.roadmapService.create_roadmap(createCarDto);
  }

  @Delete(":id")
  delete_roadmap(@Param("id") id: number): Promise<void> {
    return this.roadmapService.delete_roadmap(id);
  }
}
