import { change } from "src/modules/change/entities";
import { programing } from "src/modules/programing/entities";
import { request_transport } from "src/modules/request_transport/entities";
import { roadmap } from "src/modules/roadmap/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
import { transport } from "src/modules/transport/entities";
import { turistic_group } from "src/modules/turistic_group/entities";
import { user } from "src/modules/user/entities";
export declare class request {
    id: number;
    turistic_group: turistic_group;
    programing: programing;
    user: user;
    request_date: Date;
    change: change[];
    roadmaps: roadmap[];
    roadmap_request: roadmap_request[];
    transport: transport[];
    request_transport: request_transport[];
}
