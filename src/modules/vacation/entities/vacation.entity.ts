/* eslint-disable prettier/prettier */
import { driver_situation } from "src/modules/driver_situation/entities/driver_situation.entity";
import { driver } from "src/modules/driver/entities/driver.entitty";
import { Column, Entity, JoinColumn, ManyToOne,OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class vacation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    return_date: Date;

    @ManyToOne(() => driver_situation)
    @JoinColumn({ name: 'situation_id' })
    situation: driver_situation;

    @OneToOne(() => driver, { cascade: true })
    @JoinColumn({ name: 'driver_id' })
    driver: driver;
}
