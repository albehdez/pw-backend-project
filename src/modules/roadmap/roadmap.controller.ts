/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoadmapService } from './roadmap.service';
import { roadmap } from './entities';
import { CreateRoadmapDto } from './dto';

@Controller('roadmap')
export class RoadmapController {
    
    constructor(private readonly roadmapService: RoadmapService) {}

    @Get()
    get_cars(): Promise<roadmap[]> {
        return this.roadmapService.get_raodmaps();
    }

    @Get(':id')
    get_car(@Param('id') id: number): Promise<roadmap> {
        return this.roadmapService.get_raodmap(id);
    }

    @Post()
    create_car(@Body() createCarDto: CreateRoadmapDto): Promise<roadmap> {
        return this.roadmapService.create_roadmap(createCarDto);
    }    

    @Delete(':id')
    delete_car(@Param('id') id: number): Promise<void> {
        return this.roadmapService.delete_roadmap(id);
    }
}
