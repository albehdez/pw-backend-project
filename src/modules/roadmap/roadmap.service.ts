/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { car } from '../car/entities';
import { roadmap } from './entities';
import { Repository } from 'typeorm';
import { CreateRoadmapDto } from './dto';

@Injectable()
export class RoadmapService {
    constructor(@InjectRepository(roadmap) private readonly roadmapRepository: Repository<roadmap>,
                @InjectRepository(car) private readonly carRepository: Repository<car>) {}

    async get_raodmaps(): Promise<roadmap[]> {
        return await this.roadmapRepository.find({ relations: ['car','request'] });
    }

    async get_raodmap(id: number): Promise<roadmap> {
        const foundRoadmap = await this.roadmapRepository.findOne({ where:{car:{id:id}},relations:['car','request'] });
        if (!foundRoadmap) {
            throw new NotFoundException(`Roadmap with Car id ${id} not found`);
        }
        return foundRoadmap;
    }     

    async create_roadmap({km_start,km_end,car}: CreateRoadmapDto): Promise<roadmap> {
        const foundCar = await this.carRepository.findOne({ where: { id: car.id } });
        if (!foundCar) {
            throw new NotFoundException(`Car with id ${car.id} not found`);
        }   
            
        const newRoadmap = this.roadmapRepository.create({km_start,km_end,car:foundCar})
        const savedRoadmap = await this.roadmapRepository.save(newRoadmap);
    
      return savedRoadmap;
    }

    async delete_roadmap(id: number): Promise<void> {
        const roadmapToDelete = await this.get_raodmap(id);
    
        if (!roadmapToDelete) {
            throw new NotFoundException(`Roadmap with id ${id} not found`);
        }   
    
        await this.roadmapRepository.remove(roadmapToDelete);
    }
}
