import { roadmap_request } from './entities';
import { Repository } from 'typeorm';
export declare class RoadmapRequestService {
    private readonly roadmapqRepository;
    constructor(roadmapqRepository: Repository<roadmap_request>);
    get_roadmaps_request(): Promise<roadmap_request[]>;
    get_roadmap_request(id: number): Promise<roadmap_request>;
    delete_roadmap_request(id: number): Promise<void>;
}
