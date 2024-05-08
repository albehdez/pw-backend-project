/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CarService } from './car.service';
import { car } from './entities'; // Assuming you have an entity named 'Car'
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    get_cars(): Promise<car[]> {
        return this.carService.get_cars();
    }

    @Get(':id')
    get_car(@Param('id') id: number): Promise<car> {
        return this.carService.get_car(id);
    }

    @Post()
    create_car(@Body() createCarDto: CreateCarDto): Promise<car> {
        return this.carService.create_car(createCarDto);
    }

    @Patch(':id')
    update_car(@Param('id')id:number,@Body() updateCarDto: UpdateCarDto){
        return this.carService.update_car(id,updateCarDto);

    }

    @Delete(':id')
    delete_car(@Param('id') id: number): Promise<void> {
        return this.carService.delete_car(id);
    }
}
