import { Role } from 'src/modules/auth/enums/role.enum';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: Role;
}
