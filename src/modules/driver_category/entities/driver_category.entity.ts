import { driver } from "src/modules/driver/entities/driver.entitty";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['type_category'])
export class driver_category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    type_category: string;

    @OneToMany(() => driver, driver => driver.driver_category)
    drivers: driver[];
}
