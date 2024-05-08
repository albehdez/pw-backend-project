/* eslint-disable prettier/prettier */
import { turistic_group } from "src/modules/turistic_group/entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['name'])
export class country{
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    name:string

    @OneToMany(()=> turistic_group, turistic_group => turistic_group.country)
    turistic_group:turistic_group[];
}