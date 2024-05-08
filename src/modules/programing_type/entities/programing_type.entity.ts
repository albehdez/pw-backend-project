/* eslint-disable prettier/prettier */
import { programing } from "src/modules/programing/entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class programing_type{
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    programing_type:string

    @OneToMany(()=> programing, programing=> programing.programing_type)
    programing:programing[];
}