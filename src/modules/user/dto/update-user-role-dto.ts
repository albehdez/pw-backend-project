import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class UpdateUserRoleDto {
  

  @IsNotEmpty()
  @IsString()
  role: string;
}