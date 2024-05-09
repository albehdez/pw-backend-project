/* eslint-disable prettier/prettier */
import { request } from "src/modules/request/entities";
import { roadmap } from "src/modules/roadmap/entities";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class roadmap_request{
    @PrimaryGeneratedColumn("increment")
    id:number;

  @ManyToOne(()=> request, request=>request.roadmap_request)
  @JoinColumn({ name: 'request_id' })
  request:request;

  @ManyToOne(()=> roadmap, roadmap=>roadmap.roadmap_request)
  @JoinColumn({ name: 'roadmap_id' })
  roadmap:roadmap;
}