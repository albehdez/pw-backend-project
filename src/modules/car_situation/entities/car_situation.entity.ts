/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn,Unique } from "typeorm";
import { car} from "src/modules/car/entities";
import { inside } from "src/modules/inside/entities/inside.entity";


@Entity()
@Unique(['type_situation'])
export class car_situation {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    type_situation: string;

    @OneToMany(() => car, car => car.car_situation)
    cars: car[];

    @OneToMany(() => inside, inside => inside.car_situation)
    inside: inside[];
}

