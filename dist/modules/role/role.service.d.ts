import { role } from './entities';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto';
export declare class RoleService {
    private readonly role_repository;
    constructor(role_repository: Repository<role>);
    get_roles(): Promise<role[]>;
    get_role(id: number): Promise<role>;
    create_role({ role }: CreateRoleDto): Promise<role>;
    delete_role(id: number): Promise<void>;
}
