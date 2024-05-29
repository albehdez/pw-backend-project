/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { programing_type } from "./entities";
import { Repository } from "typeorm";
import { CreateProgramingTypeDto } from "./dto/crate_programing_type.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProgramingTypeService {
  constructor(
    @InjectRepository(programing_type)
    private readonly programing_typeRepository: Repository<programing_type>
  ) {}

  async get_programings_type(): Promise<programing_type[]> {
    return await this.programing_typeRepository.find();
  }

  async get_programing_type(id: number): Promise<programing_type> {
    const programing_type = await this.programing_typeRepository.findOne({
      where: { id },
    });

    if (!programing_type) {
      throw new NotFoundException(`Programing Type with id ${id} not found`);
    }
    return programing_type;
  }

  async create_programing_type({ programing_type }: CreateProgramingTypeDto) {
    const programing_type_create = this.programing_typeRepository.create({
      programing_type,
    });
    return this.programing_typeRepository.save(programing_type_create);
  }

  async delete_programing_type(id: number): Promise<void> {
    const programing_type: programing_type = await this.get_programing_type(id);
    await this.programing_typeRepository.delete(programing_type);
  }
}
