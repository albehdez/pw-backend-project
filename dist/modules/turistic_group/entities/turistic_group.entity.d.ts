import { country } from "src/modules/country/entities";
import { request } from "src/modules/request/entities";
export declare class turistic_group {
    id: number;
    id_group: string;
    number_turist: number;
    country: country;
    request: request[];
}
