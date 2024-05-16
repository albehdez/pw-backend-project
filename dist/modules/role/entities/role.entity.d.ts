import { Role } from "src/modules/common/enums/role.enum";
import { user } from "src/modules/user/entities";
export declare class role {
    id: number;
    role: Role;
    users: user[];
}
