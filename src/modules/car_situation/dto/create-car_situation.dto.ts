/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateCarSituationDto {
    @IsString()
    readonly type_situation:string;
}
