import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/modules/common/enums/role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email:string

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role:Role;
}
