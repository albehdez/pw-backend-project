import { request } from "src/modules/request/entities";
import { roadmap } from "src/modules/roadmap/entities";
export declare class CreateRoadmapRequestDto {
    roadmap: Partial<roadmap>;
    request: Partial<request>;
}
