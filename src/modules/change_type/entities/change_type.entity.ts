/* eslint-disable prettier/prettier */
import { change } from "src/modules/change/entities/change.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['change_type'])
export class change_type{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    change_type:string;

    @OneToMany(() => change, change => change.change_type)
    change: change[];
}