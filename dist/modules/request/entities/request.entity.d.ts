import { change } from "src/modules/change/entities";
import { request_transport } from "src/modules/request_transport/entities";
import { roadmap } from "src/modules/roadmap/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
import { transport } from "src/modules/transport/entities";
export declare class request {
    id: number;
    change: change[];
    roadmaps: roadmap[];
    roadmap_request: roadmap_request[];
    transport: transport[];
    request_transport: request_transport[];
}
