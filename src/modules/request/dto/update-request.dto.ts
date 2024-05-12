import { IsDate, IsNotEmpty, IsObject } from "class-validator";
import { programing } from "src/modules/programing/entities";
import { turistic_group } from "src/modules/turistic_group/entities";

export class UpdateRequestDto{
    @IsObject()
    group: Partial<turistic_group>;

    @IsObject()
    programing: Partial<programing>;

    //@IsObject()
   //client: Partial<client>;

    @IsNotEmpty()
    @IsDate()
    request_date: Date;
}