import { change_type } from "src/modules/change_type/entities";
import { request } from "src/modules/request/entities/request.entity";
export declare class change {
    id: number;
    change_type: change_type;
    description: string;
    request: request;
}
