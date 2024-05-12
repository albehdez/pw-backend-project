import { UserService } from "./user.service";
import { user } from "./entities";
import { CreateUserDto, UpdateUserDto, UpdateUserRoleDto } from "./dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create_user(user: CreateUserDto): Promise<user>;
    get_users(): Promise<user[]>;
    get_user(id: number): Promise<user>;
    findOneByEmail(email: string): Promise<user>;
    updateUser(email: string, updateUserDto: UpdateUserDto): Promise<user>;
    update_user_role(id: number, updateUserRoleDto: UpdateUserRoleDto): Promise<user>;
    delete_user(email: string): Promise<void>;
}
