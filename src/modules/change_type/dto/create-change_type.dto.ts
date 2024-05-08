/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateChangeTypeDto{
    @IsString()
    readonly change_type:string;
}