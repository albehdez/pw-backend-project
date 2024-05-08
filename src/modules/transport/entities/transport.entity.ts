/* eslint-disable prettier/prettier */
import { car } from "src/modules/car/entities";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

 @Entity()
 export class transport{
  @PrimaryGeneratedColumn("increment")
  id:number

  @Column({ default: false })
  is_copilot: boolean;

  @ManyToOne(()=> car, car=>car.transport)
  @JoinColumn({ name: 'car_id' })
  car:car

  @ManyToOne(()=> driver, driver=>driver.transport)
  @JoinColumn({ name: 'driver_id' })
  driver:driver

 }