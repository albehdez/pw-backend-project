import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";

import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from "bcryptjs";

import { LoginDto } from "./dto/login.dto";
import { UserService } from "../user/user.service";
import { UpdateUserCredentialsDto } from "./dto/update-user-credentials.dto";



@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterDto) {
    const { name, email, password, role } = registerUserDto;

    const hashedPassword = await bcryptjs.hash(password, 10);

    await this.userService.create_user({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return {
      name,
      email
    };
  }

  /* async register(
    registerDto: RegisterDto
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByEmail(registerDto.email);
    if (user?.password !== registerDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }; 
  }*/

  async update_user_credentials(
    email: string,
    updateCredentialsDto: UpdateUserCredentialsDto
  ) {
    const { current_password, new_password } = updateCredentialsDto;

    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const isPasswordValid = await bcryptjs.compare(
      current_password,
      user.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    const hashedPassword = await bcryptjs.hash(new_password, 10);

    await this.userService.update_user(email, { new_password: hashedPassword });

    return {
     email,
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException("Invalid email");
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }
    const payload = { email: user.email, role: user.role };

    const token = await this.jwtService.signAsync(payload);

    return {
      email: user.email,
      token: token,
    };
  }

  // async getUserFromToken(token: string): Promise<any> {
  //   try {
  //     const payload = await this.jwtService.verifyAsync(token);
  //     const user = await this.userService.findOneByEmail(payload.email);
  //     if (!user) {
  //       throw new UnauthorizedException("User not found");
  //     }
  //     return user;
  //   } catch (error) {
  //     throw new UnauthorizedException("Invalid token");
  //   }
  // }


  async get_profile({email,role}: {email: string, role: string}): Promise<{email: string, role: string}> {
    const user = await this.userService.findOneByEmail(email);
    return { email: user.email, 
              role: user.role.role };
  }

  /* async get_profile({email, role}: {email: string, role: string}): Promise<{email: string, role: string}> {
    const user = await this.userService.findOneByEmail(email);
    if (user.role!== role) {
        throw new UnauthorizedException('No se permite el acceso con este rol');
    }
    return { email: user.email, role: user.role }; */
}
  

