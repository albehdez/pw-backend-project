/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";
import { Role } from "src/modules/auth/enums/role.enum";

export class CreateRoleDto{
    @IsString()
    readonly role:Role;
}