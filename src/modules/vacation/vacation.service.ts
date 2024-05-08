import { Injectable, NotFoundException } from '@nestjs/common';
import { vacation } from './entities/vacation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VacationService {
    constructor(@InjectRepository(vacation) private readonly vacationRepository: Repository<vacation>) {}

    async get_drivers_vacation(): Promise<vacation[]> {
        return await this.vacationRepository.find({ relations: ['car_situation','car'] });
    }

    async get_driver_vacation(id: number): Promise<vacation> {
        const foundInside = await this.vacationRepository.findOne({ where: { id },relations:['car_situation','car'] });
        if (!foundInside) {
            throw new NotFoundException(`Driver with id ${id} not found`);
        }
        return foundInside;
    }

    async delete_driver_vacation(id: number): Promise<void> {
        const car_inside: vacation = await this.get_driver_vacation(id);
        await this.vacationRepository.delete(car_inside);
    }
}
