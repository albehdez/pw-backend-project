/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateProgramingTypeDto{
    @IsString()
    readonly programing_type:string;
}