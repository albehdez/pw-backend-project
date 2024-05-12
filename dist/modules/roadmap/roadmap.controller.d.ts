import { RoadmapService } from './roadmap.service';
import { roadmap } from './entities';
import { CreateRoadmapDto } from './dto';
export declare class RoadmapController {
    private readonly roadmapService;
    constructor(roadmapService: RoadmapService);
    get_cars(): Promise<roadmap[]>;
    get_car(id: number): Promise<roadmap>;
    create_car(createCarDto: CreateRoadmapDto): Promise<roadmap>;
    delete_car(id: number): Promise<void>;
}
