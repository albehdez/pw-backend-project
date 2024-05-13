import { programing_type } from "src/modules/programing_type/entities/programing_type.entity";
import { request } from "src/modules/request/entities";
export declare class programing {
    id: number;
    programing_type: programing_type;
    start_time: Date;
    end_time: Date;
    description: string;
    km_to_travel: number;
    delay: number;
    request: request[];
}
