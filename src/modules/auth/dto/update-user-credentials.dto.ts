import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class UpdateUserCredentialsDto {
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  current_password: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  new_password: string;


}
