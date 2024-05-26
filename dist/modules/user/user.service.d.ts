import { Repository } from "typeorm";
import { user } from "./entities/user.entity";
import { role } from "../role/entities";
import { CreateUserDto, UpdateUserDto, UpdateUserRoleDto } from "./dto";
import { MailService } from "../mail/mail.service";
export declare class UserService {
    private readonly userRepository;
    private readonly roleRepository;
    private mailService;
    constructor(userRepository: Repository<user>, roleRepository: Repository<role>, mailService: MailService);
    create_user(createUserDto: CreateUserDto): Promise<user>;
    get_users(): Promise<user[]>;
    get_user(id: number): Promise<user>;
    findOneByEmail(email: string): Promise<user>;
    delete_user(email: string): Promise<void>;
    update_user(email: string, userUpdate: UpdateUserDto): Promise<user>;
    update_user_role(id: number, userRoleUpdate: UpdateUserRoleDto): Promise<user>;
}
