import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { roadmap_request } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class RoadmapRequestService {
    
    constructor(@InjectRepository(roadmap_request) private readonly roadmapqRepository: Repository<roadmap_request>) {}

    async get_roadmaps_request(): Promise<roadmap_request[]> {
        return await this.roadmapqRepository.find({ relations: ['request','roadmap'] });
    }

    async get_roadmap_request(id: number): Promise<roadmap_request> {
        const foundRoadmap_request = await this.roadmapqRepository.findOne({ where: { id },relations:['request','roadmap'] });
        if (!foundRoadmap_request) {
            throw new NotFoundException(`Roadmap Request with id ${id} not found`);
        }
        return foundRoadmap_request;
    }

    async delete_roadmap_request(id: number): Promise<void> {
        const deleteRoadmap_request: roadmap_request = await this.get_roadmap_request(id);
        await this.roadmapqRepository.delete(deleteRoadmap_request);
    }


}
