/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsObject } from "class-validator";
import { car } from "src/modules/car/entities";
import { driver } from "src/modules/driver/entities/driver.entitty";

export class  CreateTransportDto{
    @IsNotEmpty()
    @IsBoolean()
    is_copilot: boolean;
    
    @IsObject()
    car: Partial<car>;

    @IsObject()
    driver: Partial<driver>;
}