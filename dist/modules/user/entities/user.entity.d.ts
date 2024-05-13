import { role } from "src/modules/role/entities/role.entity";
import { request } from "src/modules/request/entities";
export declare class user {
    id: number;
    name: string;
    email: string;
    password: string;
    role: role;
    requests: request[];
}
