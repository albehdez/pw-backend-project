/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['role'])
export class role{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    role:string;

    // @OneToMany(() => user, user => user.role)
    //user: user[];
}