/* eslint-disable prettier/prettier */
import { change } from "src/modules/change/entities";
import { roadmap } from "src/modules/roadmap/entities";
import { roadmap_request } from "src/modules/roadmap_request/entities";
import { Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
//@Unique([''])
export class request{
    @PrimaryGeneratedColumn("increment")
    id:number;    

    @OneToMany(() => change, change => change.request)
    @JoinColumn({name:"change_id"})
    change: change[];
    
    @ManyToMany(() => roadmap, roadmap => roadmap.requests)
    roadmaps: roadmap[];

    @OneToMany(() => roadmap_request, roadmap_request => roadmap_request.request)
    roadmap_request: roadmap_request[];
}

