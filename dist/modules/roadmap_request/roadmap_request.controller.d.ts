import { RoadmapRequestService } from './roadmap_request.service';
import { roadmap_request } from './entities';
export declare class RoadmapRequestController {
    private readonly roadmap_request_service;
    constructor(roadmap_request_service: RoadmapRequestService);
    get_roadmaps_request(): Promise<roadmap_request[]>;
    get_roadmap_request(id: number): Promise<roadmap_request>;
    delete_roadmap_request(id: number): Promise<void>;
}
