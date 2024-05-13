import { car } from "src/modules/car/entities";
import { inside } from "src/modules/inside/entities/inside.entity";
export declare class car_situation {
    id: number;
    type_situation: string;
    cars: car[];
    inside: inside[];
}
