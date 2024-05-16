import { Role } from 'src/modules/common/enums/role.enum';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: Role;
}
