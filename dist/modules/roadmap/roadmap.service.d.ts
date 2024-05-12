import { car } from '../car/entities';
import { roadmap } from './entities';
import { Repository } from 'typeorm';
import { CreateRoadmapDto } from './dto';
export declare class RoadmapService {
    private readonly roadmapRepository;
    private readonly carRepository;
    constructor(roadmapRepository: Repository<roadmap>, carRepository: Repository<car>);
    get_raodmaps(): Promise<roadmap[]>;
    get_raodmap(id: number): Promise<roadmap>;
    create_roadmap({ km_start, km_end, car }: CreateRoadmapDto): Promise<roadmap>;
    delete_roadmap(id: number): Promise<void>;
}
