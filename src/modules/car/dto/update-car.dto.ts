/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber, IsObject } from "class-validator";
import { car_situation } from 'src/modules/car_situation/entities';

export class UpdateCarDto {
    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsNumber()
    number_seats: number;

    @IsNotEmpty()
    @IsNumber()
    km_available: number;

    @IsNotEmpty()
    @IsString()
    license_plate: string;

    @IsObject()
    situation: Partial<car_situation>;
}
