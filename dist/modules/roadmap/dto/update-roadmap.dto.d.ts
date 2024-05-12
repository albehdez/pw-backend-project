import { car } from "src/modules/car/entities";
export declare class UpdateRoadmapDto {
    km_start: number;
    km_end: number;
    car: Partial<car>;
}
