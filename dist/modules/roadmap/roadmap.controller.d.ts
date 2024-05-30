import { RoadmapService } from "./roadmap.service";
import { roadmap } from "./entities";
import { CreateRoadmapDto } from "./dto";
export declare class RoadmapController {
    private readonly roadmapService;
    constructor(roadmapService: RoadmapService);
    get_raodmaps(): Promise<roadmap[]>;
    get_raodmap(id: number): Promise<roadmap>;
    create_roadmap(createCarDto: CreateRoadmapDto): Promise<roadmap>;
    delete_roadmap(id: number): Promise<void>;
}
