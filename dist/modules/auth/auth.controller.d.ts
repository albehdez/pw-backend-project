import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { UpdateUserCredentialsDto } from "./dto/update-user-credentials.dto";
import { Request } from "express";
interface role {
    id: number;
    role: string;
}
interface User {
    email: string;
    role: role;
}
interface RequestWithUser extends Request {
    user: User;
}
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
        token: string;
    }>;
    get_profile(req: RequestWithUser): Promise<{
        email: string;
        role: string;
    }>;
}
export {};
