import { Role } from "../enums/role.enum";
export interface ActiveUserInterface {
    email: string;
    name: string;
    role: Role;
}
