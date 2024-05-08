/* eslint-disable prettier/prettier */
import { country } from "src/modules/country/entities";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
export class turistic_group{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    number_turist:number;

    @ManyToOne(()=> country, (country)=> country.turistic_group, {cascade:true})
    @JoinColumn({name:"country_id"})
    country:country;

    //@OneToOne(()=> request,(request)=>request.turistic_group)
    //request:request[];

}