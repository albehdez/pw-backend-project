/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { car } from '../car/entities';

import { inside } from './entities/inside.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InsideService {
    constructor(@InjectRepository(inside) private readonly insideRepository: Repository<inside>) {}

    async get_cars_inside(): Promise<inside[]> {
        return await this.insideRepository.find({ relations: ['car_situation','car'] });
    }

    async get_car_inside(id: number): Promise<inside> {
        const foundInside = await this.insideRepository.findOne({ where: { id },relations:['car_situation','car'] });
        if (!foundInside) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return foundInside;
    }

    async delete_car_inside(id: number): Promise<void> {
        const car_inside: inside = await this.get_car_inside(id);
        await this.insideRepository.delete(car_inside);
    }

}
