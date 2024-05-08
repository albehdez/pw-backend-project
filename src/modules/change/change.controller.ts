/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChangeService } from './change.service';
import { change } from './entities';
import { CreateChangeDto } from './dto';

@Controller('change')
export class ChangeController {
    
    constructor(private readonly changeService: ChangeService) {}

    @Get()
    get_changes(): Promise<change[]> {
        return this.changeService.get_changes();
    }

    @Get(':id')
    get_change(@Param('id') id: number): Promise<change> {
        return this.changeService.get_change(id);
    }

    @Post()
    create_cgange(@Body() createChangeDto: CreateChangeDto): Promise<change> {
        return this.changeService.create_change(createChangeDto);
    }    

    @Delete(':id')
    delete_changes(@Param('id') id: number): Promise<void> {
        return this.changeService.delete_change(id);
    }
}

