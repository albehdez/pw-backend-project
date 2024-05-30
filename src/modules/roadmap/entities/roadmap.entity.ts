/* eslint-disable prettier/prettier */
import { car } from "src/modules/car/entities";
import { request } from "src/modules/request/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class roadmap {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  km_start: number;

  @Column()
  km_end: number;

  @OneToOne(() => car, { cascade: true })
  @JoinColumn({ name: "car_id" })
  car: car;

  @ManyToMany(() => request, (request) => request.roadmaps)
  @JoinColumn()
  requests: request[];

  @OneToMany(
    () => roadmap_request,
    (roadmap_request) => roadmap_request.roadmap
  )
  @JoinColumn()
  roadmap_request: roadmap_request[];
}
