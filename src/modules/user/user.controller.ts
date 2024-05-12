import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { user } from "./entities";

import { CreateUserDto, UpdateUserDto, UpdateUserRoleDto } from "./dto";
import { Role } from "../auth/enums/role.enum";
import { Roles } from "../auth/decoradors/roles.decoradors";
import { Auth } from "../auth/decoradors/auth.decorator";

@UsePipes(new ValidationPipe())
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create_user(@Body() user: CreateUserDto) {
    return this.userService.create_user(user);
  }

  @Get()
  get_users(): Promise<user[]> {
    return this.userService.get_users();
  }

  @Get(":id")
  get_user(@Param("id") id: number): Promise<user> {
    return this.userService.get_user(id);
  }

  @Get("email/:email")
  findOneByEmail(@Param("email") email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(":email")
  updateUser(
    @Param("email") email: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update_user(email, updateUserDto);
  }

  @Auth(Role.Admin)
  @Patch("role/:id")
  update_user_role(
    @Param("id") id: number,
    @Body() updateUserRoleDto: UpdateUserRoleDto
  ) {
    return this.userService.update_user_role(id, updateUserRoleDto);
  }

  @Delete(":email")
  delete_user(@Param("email") email: string): Promise<void> {
    return this.userService.delete_user(email);
  }
}
