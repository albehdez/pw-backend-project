import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { user } from "./entities/user.entity";
import { role } from "../role/entities";
import { CreateUserDto, UpdateUserDto, UpdateUserRoleDto } from "./dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>,
    @InjectRepository(role) private readonly roleRepository: Repository<role>
  ) {}

  async create_user(createUserDto: CreateUserDto) {
    const foundRole = await this.roleRepository.findOne({
      where: { role: createUserDto.role },
    });

    if (!foundRole)
      throw new BadRequestException(`Rol '${createUserDto.role}' not found`);

    const foundUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (foundUser)
      throw new BadRequestException(
        `User with email '${createUserDto.email}' already exists`
      );

    const newUser = new user();

    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    newUser.role = foundRole; 

    const createdUser = await this.userRepository.save(newUser);

    return createdUser;
  }

  async get_users(): Promise<user[]> {
    return await this.userRepository.find({ relations: ["role"] });
  }

  async get_user(id: number): Promise<user> {
    const foundUser = await this.userRepository.findOne({
      where: { id },
      relations: ["role"],
    });
    if (!foundUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return foundUser;
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      relations: ["role"],
    });
  }

  async delete_user(email: string): Promise<void> {
    const userToDelete = await this.findOneByEmail(email)

    if (!userToDelete) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    await this.userRepository.remove(userToDelete);
  }

  async update_user(email:string,userUpdate: UpdateUserDto): Promise<user> {
    const userToUpdate = await this.findOneByEmail(email);

    if (!userToUpdate) {
      throw new NotFoundException(`User with id ${email} not found`);
    }

    if (userUpdate.new_password) {
      userToUpdate.password = userUpdate.new_password;
    }
    const updatedUser = await this.userRepository.save(userToUpdate);

    return updatedUser;
  }

  async update_user_role(
    id: number,
    userRoleUpdate: UpdateUserRoleDto
  ): Promise<user> {
    const userToUpdate = await this.userRepository.findOne({ where: { id } });

    if (!userToUpdate) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const foundRole = await this.roleRepository.findOne({
      where: { role: userRoleUpdate.role },
    });

    if (!foundRole) {
      throw new BadRequestException(`Role '${userRoleUpdate.role}' not found`);
    }

    userToUpdate.role = foundRole;

    const updatedUser = await this.userRepository.save(userToUpdate);

    return updatedUser;
  }
}
