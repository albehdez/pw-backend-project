/* eslint-disable prettier/prettier */
import { change } from "src/modules/change/entities";
import { programing } from "src/modules/programing/entities";
import { request_transport } from "src/modules/request_transport/entities";
import { roadmap } from "src/modules/roadmap/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
import { transport } from "src/modules/transport/entities";
import { turistic_group } from "src/modules/turistic_group/entities";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
//@Unique([''])
export class request{
    @PrimaryGeneratedColumn("increment")
    id:number;    

    @ManyToOne(() => turistic_group, (turistic_group) => turistic_group.request, { cascade: true})
    @JoinColumn({ name: 'id_group' })
    group: turistic_group;

    @ManyToOne(() => programing, (programing) => programing.request, { cascade: true})
    @JoinColumn({ name: 'id_programing' })
    programing: programing;

    //@ManyToOne(() => turistic_group, (turistic_group) => turistic_group.request, { cascade: true})
    //@JoinColumn({ name: 'id_group' })
   // client: client;

    @Column()
    request_date: Date;

    @OneToMany(() => change, change => change.request)
    @JoinColumn({name:"change_id"})
    change: change[];
    
    @ManyToMany(() => roadmap, roadmap => roadmap.requests)
    roadmaps: roadmap[];

    @OneToMany(() => roadmap_request, roadmap_request => roadmap_request.request)
    roadmap_request: roadmap_request[];

    @ManyToMany(() => transport, transport => transport.request)
    transport: transport[];

    @OneToMany(() => request_transport, request_transport => request_transport.request)
    request_transport: request_transport[];
}

