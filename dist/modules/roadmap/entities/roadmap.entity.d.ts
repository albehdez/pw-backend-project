import { car } from "src/modules/car/entities";
import { request } from "src/modules/request/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
export declare class roadmap {
    id: number;
    km_start: number;
    km_end: number;
    car: car;
    requests: request[];
    roadmap_request: roadmap_request[];
}
