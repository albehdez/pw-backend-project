/* eslint-disable prettier/prettier */
import { car } from "src/modules/car/entities";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class roadmap{
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    km_start:number;

     @Column()
    km_end:number;

    @OneToOne(() => car, { cascade: true })
    @JoinColumn({ name: 'car_id' })
    car: car;




}