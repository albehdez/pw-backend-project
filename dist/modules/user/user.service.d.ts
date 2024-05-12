import { Repository } from "typeorm";
import { user } from "./entities/user.entity";
import { role } from "../role/entities";
import { CreateUserDto, UpdateUserDto, UpdateUserRoleDto } from "./dto";
export declare class UserService {
    private readonly userRepository;
    private readonly roleRepository;
    constructor(userRepository: Repository<user>, roleRepository: Repository<role>);
    create_user(createUserDto: CreateUserDto): Promise<user>;
    get_users(): Promise<user[]>;
    get_user(id: number): Promise<user>;
    findOneByEmail(email: string): Promise<user>;
    delete_user(email: string): Promise<void>;
    update_user(email: string, userUpdate: UpdateUserDto): Promise<user>;
    update_user_role(id: number, userRoleUpdate: UpdateUserRoleDto): Promise<user>;
}
