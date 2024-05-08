import { IsString } from 'class-validator';

export class CreateDriverSituationDto {
    @IsString()
    readonly type_situation: string;
}
