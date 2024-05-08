import { Controller, Delete, Get, Param } from '@nestjs/common';
import { InsideService } from './inside.service';
import { inside } from './entities/inside.entity';

@Controller('inside')
export class InsideController {
    constructor(private readonly inside_service:InsideService){
    }

    @Get()
    get_cars_inside():Promise<inside[]>{
        return this.inside_service.get_cars_inside();
    }

    @Get(':id')
    get_car_inside(@Param('id') id:number):Promise<inside>{
        return this.inside_service.get_car_inside(id);
    }

    @Delete(':id')
    delete_car_inside(@Param('id')id:number):Promise<void>{
        return this.inside_service.delete_car_inside(id);
    }
    

}
