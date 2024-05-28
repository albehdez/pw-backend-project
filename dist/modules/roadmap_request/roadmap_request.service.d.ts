import { roadmap_request } from "./entities";
import { Repository } from "typeorm";
import { roadmap } from "../roadmap/entities";
import { request } from "../request/entities";
import { CreateRoadmapRequestDto } from "./dto/create_roadmap_request";
export declare class RoadmapRequestService {
    private readonly roadmapqRepository;
    private readonly roadmapRepository;
    private readonly requestRepository;
    constructor(roadmapqRepository: Repository<roadmap_request>, roadmapRepository: Repository<roadmap>, requestRepository: Repository<request>);
    get_roadmaps_request(): Promise<roadmap_request[]>;
    get_roadmap_request(id: number): Promise<roadmap_request>;
    create_roadmap_request({ request, roadmap, }: CreateRoadmapRequestDto): Promise<roadmap_request>;
    delete_roadmap_request(id: number): Promise<void>;
}
