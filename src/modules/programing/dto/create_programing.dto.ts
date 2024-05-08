/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { programing_type } from "src/modules/programing_type/entities/programing_type.entity";


export class CreateProgramingDto{ 

    @IsObject()
     type: Partial<programing_type>;

    @IsNotEmpty()
    @IsDate()
    start_time:Date;

    @IsNotEmpty()
    @IsDate()
    end_time:Date;

   @IsNotEmpty()
   @IsString()
    description:string;

    @IsNotEmpty()
    @IsNumber()
    km_to_travel:number;

    @IsNotEmpty()
    @IsNumber()
    delay:number;

}
