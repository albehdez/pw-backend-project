/* eslint-disable prettier/prettier */
import { Role } from "src/modules/auth/enums/role.enum";
import { user } from "src/modules/user/entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['role'])
export class role{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({ type: 'enum', enum: Role})
    role: Role;

     @OneToMany(() => user, user => user.role)
     users: user[];
}