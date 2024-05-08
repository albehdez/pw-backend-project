/* eslint-disable prettier/prettier */
import { change } from "src/modules/change/entities";
import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
//@Unique([''])
export class request{
    @PrimaryGeneratedColumn("increment")
    id:number;

    

    @OneToMany(() => change, change => change.request)
    @JoinColumn({name:"change_id"})
    change: change[];
    
    
}

