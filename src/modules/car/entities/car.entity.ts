/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { car_situation } from "src/modules/car_situation/entities/car_situation.entity";
import { inside } from "src/modules/inside/entities/inside.entity";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { transport } from "src/modules/transport/entities";
import { roadmap } from "src/modules/roadmap/entities";

@Entity()
@Unique(["license_plate"])
export class car {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  brand: string;

  @Column()
  number_seats: number;

  @Column()
  km_available: number;

  @Column()
  license_plate: string;

  @ManyToOne(() => car_situation, (car_situation) => car_situation.cars, {
    cascade: true,
  })
  @JoinColumn({ name: "car_situation_id" })
  car_situation: car_situation;

  @OneToOne(() => inside, (inside) => inside.car)
  inside: inside;

  @ManyToMany(() => driver, (driver) => driver.cars)
  @JoinTable()
  drivers: driver[];

  @OneToMany(() => transport, (transport) => transport.car)
  @JoinTable()
  transport: transport[];

  @OneToOne(() => roadmap, (roadmap) => roadmap.car)
  roadmap: roadmap[];
}
