/* eslint-disable prettier/prettier */
import { change_type } from "src/modules/change_type/entities";
import { request } from "src/modules/request/entities/request.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['id','change_type','description'])
export class change{
    @PrimaryGeneratedColumn("increment")
    id:number

     @ManyToOne(() => change_type, (change_type) => change_type.change, { cascade: true})
    @JoinColumn({ name: 'change_type_id' })
    change_type: change_type;

    @Column()
    description:string;

    @ManyToOne(() => request, (request) => request.change, { cascade: true})
    @JoinColumn({ name: 'request_id' })
    request: request;

}