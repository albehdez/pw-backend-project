import { role } from './entities';
import { CreateRoleDto } from './dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly role_service;
    constructor(role_service: RoleService);
    get_cars_situation(): Promise<role[]>;
    get_car_situation(id: number): Promise<role>;
    create_car_situation(type_situation: CreateRoleDto): Promise<role>;
    delete_car_situation(id: number): Promise<void>;
}
