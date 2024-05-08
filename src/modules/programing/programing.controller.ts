/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProgramingService } from './programing.service';
import { programing } from './entities';
import { CreateProgramingDto, UpdateProgramingDto } from './dto';


@Controller('programing')
export class ProgramingController {
    constructor(private readonly programingService:ProgramingService){}

     @Get()
     get_programings():Promise<programing[]>{
        return this.programingService.get_programings();
     }
    
     @Get(':id')
     get_programing(@Param('id')id:number):Promise<programing>{
        return this.programingService.get_programing(id);
     }

     @Post()
     create_programing(@Body() createProgramingDto:CreateProgramingDto):Promise<programing>{
        return this.programingService.create_programing(createProgramingDto);
     }

     @Patch(":id")
     update_programing(@Param("id") id:number,@Body() updateProgramingDto:UpdateProgramingDto){
        return this.programingService.update_programing(id,updateProgramingDto);
     }

     @Delete(':id')
     delete_programing(@Param("id") id:number):Promise<void>{
        return this.programingService.delete_programing(id);
     }
}
