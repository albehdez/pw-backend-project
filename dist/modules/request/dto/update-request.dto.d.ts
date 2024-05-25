import { programing } from "src/modules/programing/entities";
import { turistic_group } from "src/modules/turistic_group/entities";
import { user } from "src/modules/user/entities";
export declare class UpdateRequestDto {
    group: Partial<turistic_group>;
    programing: Partial<programing>;
    request_date: Date;
    client: Partial<user>;
}
