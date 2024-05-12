import { car_situation } from 'src/modules/car_situation/entities';
export declare class UpdateCarDto {
    brand: string;
    number_seats: number;
    km_available: number;
    license_plate: string;
    situation: Partial<car_situation>;
}
