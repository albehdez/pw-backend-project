import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request_transport } from './entities';
import { Repository } from 'typeorm';
import { CreateRequestTransportDto } from './dto';
import { request } from '../request/entities';
import { transport } from '../transport/entities';

@Injectable()
export class RequestTransportService {
    
    
    constructor(@InjectRepository(request_transport) private readonly RTRepository: Repository<request_transport>,
                @InjectRepository(request) private readonly requestRepository: Repository<request>,
                @InjectRepository(transport) private readonly transportRepository: Repository<transport>) {}

    async get_request_transports(): Promise<request_transport[]> {
        return await this.RTRepository.find({ relations: ['request','transport'] });
    }

    async get_request_transport(id: number): Promise<request_transport> {
        const foundRequest_transport = await this.RTRepository.findOne({ where: { id },relations:['request','trasnport'] });
        if (!foundRequest_transport) {
            throw new NotFoundException(`Request Transport with id ${id} not found`);
        }
        return foundRequest_transport;
    }
    
    async create_request_trasnport({ request,trasnport}: CreateRequestTransportDto): Promise<request_transport> {
    
        if (request) {
         var foundRequest= await this.requestRepository.findOne({where:{id:request.id}})
         if (!foundRequest) {
         throw new NotFoundException(`Request with id ${request.id} does not exist`);
        }
    }
        if (trasnport) {
         var foundTransport= await this.transportRepository.findOne({where:{id:trasnport.id}})
         if (!foundTransport) {
         throw new NotFoundException(`Transport with id ${trasnport.id} does not exist`);
        }
    }
        const newRequestTransport=this.RTRepository.create({request:foundRequest,transport:foundTransport})
        const savedRequestTransport = await this.RTRepository.save(newRequestTransport);
        return savedRequestTransport

}

    async delete_request_transport(id: number): Promise<void> {
        const deleteRequest_transport: request_transport = await this.get_request_transport(id);
        await this.RTRepository.delete(deleteRequest_transport);
    }

}
