import { Controller, Delete, Get, Param } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { vacation } from './entities/vacation.entity';

@Controller('vacation')
export class VacationController {
    constructor(private readonly vacation_service:VacationService){
    }

    @Get()
    get_drivers_vacation():Promise<vacation[]>{
        return this.vacation_service.get_drivers_vacation();
    }

    @Get(':id')
    get_driver_vacation(@Param('id') id:number):Promise<vacation>{
        return this.vacation_service.get_driver_vacation(id);
    }

    @Delete(':id')
    delete_driver_vacation(@Param('id')id:number):Promise<void>{
        return this.vacation_service.delete_driver_vacation(id);
    }
}
