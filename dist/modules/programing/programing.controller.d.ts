import { ProgramingService } from "./programing.service";
import { programing } from "./entities";
import { CreateProgramingDto, UpdateProgramingDto } from "./dto";
export declare class ProgramingController {
    private readonly programingService;
    constructor(programingService: ProgramingService);
    get_programings(): Promise<programing[]>;
    get_programing(id: number): Promise<programing>;
    create_programing(createProgramingDto: CreateProgramingDto): Promise<programing>;
    update_programing(id: number, updateProgramingDto: UpdateProgramingDto): Promise<programing>;
    delete_programing(id: number): Promise<void>;
    generatePDF(res: any): Promise<void>;
    sendProgramingInfoByEmail(userEmail: string): Promise<void>;
}
