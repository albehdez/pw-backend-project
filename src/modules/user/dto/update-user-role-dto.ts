import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/modules/common/enums/role.enum';


export class UpdateUserRoleDto {
  

  @IsNotEmpty()
  @IsString()
  role: Role;
}