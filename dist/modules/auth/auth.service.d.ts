import { RegisterDto } from "./dto/register.dto";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { UserService } from "../user/user.service";
import { UpdateUserCredentialsDto } from "./dto/update-user-credentials.dto";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(registerUserDto: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
    update_user_credentials(email: string, updateCredentialsDto: UpdateUserCredentialsDto): Promise<{
        email: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        name: string;
        email: string;
        role: import("../common/enums/role.enum").Role;
        token: string;
    }>;
    get_profile({ email, role, }: {
        email: string;
        role: string;
    }): Promise<{
        name: string;
        email: string;
        role: string;
    }>;
}
