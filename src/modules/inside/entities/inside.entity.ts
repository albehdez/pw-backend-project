/* eslint-disable prettier/prettier */
import { car_situation } from "src/modules/car_situation/entities";
import { car } from "src/modules/car/entities";
import { Column, Entity, JoinColumn, ManyToOne,OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class inside {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    return_date: Date;

    @ManyToOne(() => car_situation)
    @JoinColumn({ name: 'situation_id' })
    car_situation: car_situation;

    @OneToOne(() => car, { cascade: true })
    @JoinColumn({ name: 'car_id' })
    car: car;
}
