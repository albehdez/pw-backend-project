import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { UpdateUserCredentialsDto } from "./dto/update-user-credentials.dto";
import { Role } from "../common/enums/role.enum";
import { UserInterface } from "../common/interfaces/user.interface";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
    updateUserCredentials(email: string, updateCredentialsDto: UpdateUserCredentialsDto): Promise<{
        email: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        name: string;
        email: string;
        role: Role;
        token: string;
    }>;
    get_profile(user: UserInterface): Promise<{
        name: string;
        email: string;
        role: string;
    }>;
}
