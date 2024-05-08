/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsObject } from "class-validator";
import { car } from "src/modules/car/entities";

export class CreateRoadmapDto{
    @IsNotEmpty()
    @IsNumber()
    km_start:number;

    @IsNotEmpty()
    @IsNumber()    
    km_end:number;

   @IsObject()
    car: Partial<car>;
}