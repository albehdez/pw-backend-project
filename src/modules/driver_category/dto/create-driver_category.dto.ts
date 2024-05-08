import { IsString } from "class-validator";

export class CreateDriverCategoryDto {
    @IsString()
    readonly type_category: string;
}
