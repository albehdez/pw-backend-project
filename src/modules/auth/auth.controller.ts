import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Req,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { UpdateUserCredentialsDto } from "./dto/update-user-credentials.dto";
import { Request } from "express";
import { Role } from './enums/role.enum';
import { Auth } from "./decoradors/auth.decorator";



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


@UsePipes(new ValidationPipe())
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Patch(":email")
  updateUserCredentials(
    @Param("email") email: string,
    @Body() updateCredentialsDto: UpdateUserCredentialsDto
  ) {
    return this.authService.update_user_credentials(
      email,
      updateCredentialsDto
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

/*   @UseGuards(AuthGuard,RolesGuard) // Para cualquier endpoint hace falta copiar estos 2 decoradores para garantizar la autorización
  @Roles(Role.Admin) //Estos son los roles que se le permite. Puede ser un array  @Roles('Admin','Manager')
  @Get("profile")
  get_profile(@Req() req: RequestWithUser) {
    return this.authService.get_profile({
      email:req.user.email,
      role:req.user.role.role,
    });
  } */

/*   La funcion de arriba es la misma que la de abajo, se ocupa el decorador @Auth creado por el desarrollador 
  que engloba los decoradores @Roles() y @UseGuards() */

  
  @Auth(Role.Admin) // Para cualquier endpoint hace falta copiar este decoreador para garantizar la autorización
  @Get("profile")
  get_profile(@Req() req: RequestWithUser) {
    return this.authService.get_profile({
      email:req.user.email,
      role:req.user.role.role,
    });
  }

  // @UseGuards(AuthGuard)
  // @Get('profile')
  // async getProfile(@Request() req) {
  //   const token = req.headers.authorization?.split(' ')[1];
  //   if (!token) {
  //     throw new UnauthorizedException("No token provided");
  //   }
  //   const user = await this.authService.getUserFromToken(token);
  //   return user;
  // }
}
