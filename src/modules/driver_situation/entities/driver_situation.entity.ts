import { driver } from "src/modules/driver/entities/driver.entitty";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['type_situation'])
export class driver_situation {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    type_situation: string;

    @OneToMany(() => driver, driver => driver.driver_situation)
    drivers: driver[];
}
