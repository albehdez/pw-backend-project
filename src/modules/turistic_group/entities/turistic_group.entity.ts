/* eslint-disable prettier/prettier */
import { country } from "src/modules/country/entities";
import { request } from "src/modules/request/entities";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
export class turistic_group {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  id_group: string;

  @Column()
  number_turist: number;

  @ManyToOne(() => country, (country) => country.turistic_group, {
    cascade: true,
  })
  @JoinColumn({ name: "country_id" })
  country: country;

  @OneToMany(() => request, (request) => request.turistic_group)
  @JoinColumn()
  request: request[];
}
