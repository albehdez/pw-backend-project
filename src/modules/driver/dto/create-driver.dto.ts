import { IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { driver_category } from "src/modules/driver_category/entities";
import { driver_situation } from "src/modules/driver_situation/entities/driver_situation.entity";

export class CreateDriverDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    identify_card: string;

    @IsOptional()
    @IsString()
    permanent_car: string;

    @IsObject()
    situation: Partial<driver_situation>;
    
    @IsObject()
    category:Partial<driver_category>;
}