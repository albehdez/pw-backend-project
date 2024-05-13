import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { Role } from "../enums/role.enum";

export class RegisterDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

  @IsString()
  role:Role;


}
