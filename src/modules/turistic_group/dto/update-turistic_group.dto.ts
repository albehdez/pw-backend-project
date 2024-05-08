/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsObject } from "class-validator";
import { country } from "src/modules/country/entities";

export class UpdateTuristicGroupDto{
    @IsNotEmpty()
    @IsNumber()
    number_turist:number;

    @IsObject()
    country:Partial<country>;
}