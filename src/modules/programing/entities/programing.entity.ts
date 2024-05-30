/* eslint-disable prettier/prettier */

import { programing_type } from "src/modules/programing_type/entities/programing_type.entity";
import { request } from "src/modules/request/entities";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique([
  "programing_type",
  "start_time",
  "end_time",
  "description",
  "km_to_travel",
  "delay",
])
export class programing {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(
    () => programing_type,
    (programing_type) => programing_type.programing,
    { cascade: true }
  )
  @JoinColumn({ name: "programing_type_id" })
  programing_type: programing_type;

  @Column("time")
  start_time: Date;

  @Column("time")
  end_time: Date;

  @Column()
  description: string;

  @Column()
  km_to_travel: number;

  @Column()
  delay: number;

  @OneToMany(() => request, (request) => request.turistic_group)
  @JoinColumn()
  request: request[];
}
