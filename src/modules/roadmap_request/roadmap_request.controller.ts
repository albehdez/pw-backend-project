import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RoadmapRequestService } from './roadmap_request.service';
import { roadmap_request } from './entities';

@Controller('roadmap-request')
export class RoadmapRequestController {
    
    constructor(private readonly roadmap_request_service:RoadmapRequestService){
    }

    @Get()
    get_cars_inside():Promise<roadmap_request[]>{
        return this.roadmap_request_service.get_roadmaps_request();
    }

    @Get(':id')
    get_car_inside(@Param('id') id:number):Promise<roadmap_request>{
        return this.roadmap_request_service.get_roadmap_request(id);
    }

    @Delete(':id')
    delete_car_inside(@Param('id')id:number):Promise<void>{
        return this.roadmap_request_service.delete_roadmap_request(id);
    }
    
}
