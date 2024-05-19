/// <reference types="node" />
import { inside } from './entities/inside.entity';
import { Repository } from 'typeorm';
export declare class InsideService {
    private readonly insideRepository;
    constructor(insideRepository: Repository<inside>);
    get_cars_inside(): Promise<inside[]>;
    get_car_inside(id: number): Promise<inside>;
    delete_car_inside(id: number): Promise<void>;
    generatePDF(): Promise<Buffer>;
}
