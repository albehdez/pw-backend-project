import { Injectable, NotFoundException } from '@nestjs/common';
import { request } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { turistic_group } from '../turistic_group/entities';
import { programing } from '../programing/entities';
import { CreateRequestDto } from './dto';

@Injectable()
export class RequestService {
    constructor(@InjectRepository(request) private readonly requestRepository: Repository<request>,
                @InjectRepository(turistic_group) private readonly TGRepository: Repository<turistic_group>,
                @InjectRepository(programing) private readonly programingRepository: Repository<programing>){}
               // @InjectRepository(car) private readonly carRepository: Repository<car>) {}

    async get_requests(): Promise<request[]> {
        return await this.requestRepository.find({ relations: ['turistic_group','programing'] });
    }

    async get_request(id: number): Promise<request> {
        const foundRequest = await this.requestRepository.findOne({ where: { id },relations:['turistic_group','programing'] });
        if (!foundRequest) {
            throw new NotFoundException(`Request with id ${id} not found`);
        }
        return foundRequest;
    }

    async create_request({ group, programing, request_date}: CreateRequestDto): Promise<request> {
    
        if (group) {
         var foundGroup= await this.TGRepository.findOne({where:{id:group.id}})
         if (!foundGroup) {
         throw new NotFoundException(`Turistic Group withid ${group.id} does not exist`);
        }
    }

        if (programing) {
         var foundPrograming= await this.programingRepository.findOne({where:{id:programing.id}})
         if (!foundPrograming) {
          throw new NotFoundException(`Programing with id ${programing.id} does not exist`);
        }
    }
        const newRequest=this.requestRepository.create({group:foundGroup,programing:foundPrograming,request_date})
        const savedRequest = await this.requestRepository.save(newRequest);
        return savedRequest
    }

    
    
}

