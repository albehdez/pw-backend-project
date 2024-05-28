import { IsObject } from "class-validator";
import { request } from "src/modules/request/entities";
import { roadmap } from "src/modules/roadmap/entities";

export class CreateRoadmapRequestDto {
  @IsObject()
  roadmap: Partial<roadmap>;

  @IsObject()
  request: Partial<request>;
}
