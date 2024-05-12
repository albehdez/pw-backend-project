import { change_type } from "src/modules/change_type/entities";
import { request } from "src/modules/request/entities/request.entity";
export declare class CreateChangeDto {
    change_type: Partial<change_type>;
    description: string;
    request: Partial<request>;
}
