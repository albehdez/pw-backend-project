/* eslint-disable prettier/prettier */
import { user } from "src/modules/user/entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['role'])
export class role{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    role:string;

     @OneToMany(() => user, user => user.role)
     users: user[];
}