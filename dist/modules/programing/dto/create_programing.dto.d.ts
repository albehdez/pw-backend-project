import { programing_type } from "src/modules/programing_type/entities/programing_type.entity";
export declare class CreateProgramingDto {
    type: Partial<programing_type>;
    start_time: Date;
    end_time: Date;
    description: string;
    km_to_travel: number;
    delay: number;
}
