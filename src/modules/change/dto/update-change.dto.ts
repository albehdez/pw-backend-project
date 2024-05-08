/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsObject, IsString } from "class-validator";
import { change_type } from "src/modules/change_type/entities";
import { request } from "src/modules/request/entities/request.entity";


export class UpdateChangeDto{
    @IsObject()
    change_type:Partial<change_type>

    @IsNotEmpty()
    @IsString()
    description:string;

    @IsObject()
    request:Partial<request>;

}