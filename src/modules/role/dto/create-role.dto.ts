/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";
import { Role } from "src/modules/common/enums/role.enum";

export class CreateRoleDto{
    @IsString()
    readonly role:Role;
}