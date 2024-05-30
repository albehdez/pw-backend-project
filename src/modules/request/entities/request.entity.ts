/* eslint-disable prettier/prettier */
import { change } from "src/modules/change/entities";
import { programing } from "src/modules/programing/entities";
import { request_transport } from "src/modules/request_transport/entities";
import { roadmap } from "src/modules/roadmap/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
import { transport } from "src/modules/transport/entities";
import { turistic_group } from "src/modules/turistic_group/entities";
import { user } from "src/modules/user/entities";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
//@Unique([''])
export class request {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => turistic_group, (turistic_group) => turistic_group.request, {
    cascade: true,
  })
  @JoinColumn({ name: "id_turistic_group" })
  turistic_group: turistic_group;

  @ManyToOne(() => programing, (programing) => programing.request, {
    cascade: true,
  })
  @JoinColumn({ name: "id_programing" })
  programing: programing;

  @ManyToOne(() => user, (user) => user.requests, { cascade: true })
  @JoinColumn({ name: "user_id" })
  user: user;

  @Column()
  request_date: Date;

  @OneToMany(() => change, (change) => change.request)
  change: change[];

  @ManyToMany(() => roadmap, (roadmap) => roadmap.requests)
  @JoinTable()
  roadmaps: roadmap[];

  @OneToMany(
    () => roadmap_request,
    (roadmap_request) => roadmap_request.request
  )
  roadmap_request: roadmap_request[];

  @ManyToMany(() => transport, (transport) => transport.request)
  @JoinTable()
  transport: transport[];

  @OneToMany(
    () => request_transport,
    (request_transport) => request_transport.request,
    { onDelete: "CASCADE" }
  )
  request_transport: request_transport[];
}
