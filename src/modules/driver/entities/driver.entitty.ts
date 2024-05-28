/* eslint-disable prettier/prettier */
import { car } from "src/modules/car/entities";
import { driver_category } from "src/modules/driver_category/entities";
import { driver_situation } from "src/modules/driver_situation/entities/driver_situation.entity";
import { transport } from "src/modules/transport/entities";
import { vacation } from "src/modules/vacation/entities/vacation.entity";
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

@Entity()
@Unique(["identify_card"])
@Unique(["permanent_car"])
export class driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  identify_card: string;

  @Column({ nullable: true })
  permanent_car: string;

  @ManyToOne(
    () => driver_situation,
    (driver_situation) => driver_situation.drivers,
    { cascade: true }
  )
  @JoinColumn({ name: "driver_situation_id" })
  driver_situation: driver_situation;

  @ManyToOne(
    () => driver_category,
    (driver_category) => driver_category.drivers,
    { cascade: true }
  )
  @JoinColumn({ name: "category_id" })
  driver_category: driver_category;

  @OneToOne(() => vacation, (vacation) => vacation.driver)
  vacation: vacation[];

  @ManyToMany(() => car, (car) => car.drivers)
  @JoinTable()
  cars: car[];

  @OneToMany(() => transport, (transport) => transport.driver)
  @JoinTable()
  transport: transport[];
}
