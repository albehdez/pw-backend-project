import { role } from './entities';
import { CreateRoleDto } from './dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly role_service;
    constructor(role_service: RoleService);
    get_roles(): Promise<role[]>;
    get_role(id: number): Promise<role>;
    create_role(type_situation: CreateRoleDto): Promise<role>;
    delete_role(id: number): Promise<void>;
}
