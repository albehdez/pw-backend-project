/* eslint-disable prettier/prettier */
import { car } from "src/modules/car/entities";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { request } from "src/modules/request/entities";
import { request_transport } from "src/modules/request_transport/entities";
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
export class transport {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  is_copilot: boolean;

  @ManyToOne(() => car, (car) => car.transport)
  @JoinColumn({ name: "car_id" })
  car: car;

  @ManyToOne(() => driver, (driver) => driver.transport)
  @JoinColumn({ name: "driver_id" })
  driver: driver;

  @ManyToMany(() => request, (request) => request.transport)
  @JoinTable()
  request: request[];

  @OneToMany(
    () => request_transport,
    (request_transport) => request_transport.request
  )
  @JoinColumn()
  request_transport: request_transport[];
}
