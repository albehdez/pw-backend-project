import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request_transport } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class RequestTransportService {
    
    
    constructor(@InjectRepository(request_transport) private readonly requesttRepository: Repository<request_transport>) {}

    async get_request_transports(): Promise<request_transport[]> {
        return await this.requesttRepository.find({ relations: ['request','transport'] });
    }

    async get_request_transport(id: number): Promise<request_transport> {
        const foundRequest_transport = await this.requesttRepository.findOne({ where: { id },relations:['request','trasnport'] });
        if (!foundRequest_transport) {
            throw new NotFoundException(`Request Transport with id ${id} not found`);
        }
        return foundRequest_transport;
    }

    async delete_request_transport(id: number): Promise<void> {
        const deleteRoadmap_request: request_transport = await this.get_request_transport(id);
        await this.requesttRepository.delete(deleteRoadmap_request);
    }

}
