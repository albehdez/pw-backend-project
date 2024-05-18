import { Body, Controller, Param, Patch, Post,Delete, Get } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto, UpdateDriverDto } from './dto';
import { driver } from './entities/driver.entitty';
//git commit m "agregando servicio para devolver los datos de los carros de manera simple"
@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) {}

    @Get()
    get_drivers(): Promise<driver[]> {
        return this.driverService.get_drivers();
    }
    

    @Get(':id')
    get_driver(@Param('id') id: number): Promise<driver> {
        return this.driverService.get_driver(id);
    }

    @Post()
    create_driver(@Body() createDriverDto: CreateDriverDto): Promise<driver> {
        return this.driverService.create_driver(createDriverDto);
    }

    @Patch(':id')
    update_driver(@Param('id')id:number,@Body() updateDriverDto: UpdateDriverDto){
        return this.driverService.update_driver(id,updateDriverDto);

    }

    @Delete(':id')
    delete_driver(@Param('id') id: number): Promise<void> {
        return this.driverService.delete_driver(id);
    }
}
