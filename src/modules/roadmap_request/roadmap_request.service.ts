import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { roadmap_request } from "./entities";
import { Repository } from "typeorm";
import { roadmap } from "../roadmap/entities";
import { request } from "../request/entities";
import { CreateRoadmapRequestDto } from "./dto/create_roadmap_request";

@Injectable()
export class RoadmapRequestService {
  constructor(
    @InjectRepository(roadmap_request)
    private readonly roadmapqRepository: Repository<roadmap_request>,
    @InjectRepository(roadmap)
    private readonly roadmapRepository: Repository<roadmap>,
    @InjectRepository(request)
    private readonly requestRepository: Repository<request>
  ) {}

  async get_roadmaps_request(): Promise<roadmap_request[]> {
    return await this.roadmapqRepository.find({
      relations: ["request", "roadmap"],
    });
  }

  async get_roadmap_request(id: number): Promise<roadmap_request> {
    const foundRoadmap_request = await this.roadmapqRepository.findOne({
      where: { id },
      relations: ["request", "roadmap"],
    });
    if (!foundRoadmap_request) {
      throw new NotFoundException(`Roadmap Request with id ${id} not found`);
    }
    return foundRoadmap_request;
  }

  async create_roadmap_request({
    request,
    roadmap,
  }: CreateRoadmapRequestDto): Promise<roadmap_request> {
    if (request) {
      var foundrequest = await this.requestRepository.findOne({
        where: { id: request.id },
      });
      if (!foundrequest) {
        throw new NotFoundException(
          `Request with id${request.id} does not exist`
        );
      }

      if (roadmap) {
        var foundroadmap = await this.roadmapRepository.findOne({
          where: { id: roadmap.id },
        });
        if (!foundroadmap) {
          throw new NotFoundException(
            `Roadmap with id${request.id} does not exist`
          );
        }
      }
      const newRoadmapRequest = this.roadmapqRepository.create({
        request: foundrequest,
        roadmap: foundroadmap,
      });
      const saveRoadmapRequest =
        await this.roadmapqRepository.save(newRoadmapRequest);
      return saveRoadmapRequest;
    }
  }

  async delete_roadmap_request(id: number): Promise<void> {
    const deleteRoadmap_request: roadmap_request =
      await this.get_roadmap_request(id);
    await this.roadmapqRepository.delete(deleteRoadmap_request);
  }
}
