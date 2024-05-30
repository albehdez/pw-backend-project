import { IsDate, IsNotEmpty, IsObject } from "class-validator";
import { programing } from "src/modules/programing/entities";
import { turistic_group } from "src/modules/turistic_group/entities";
import { user } from "src/modules/user/entities";

export class UpdateRequestDto{
    @IsObject()
    group: Partial<turistic_group>;

    @IsObject()
    programing: Partial<programing>;

    @IsNotEmpty()
    @IsDate()
    request_date: Date;

    
}