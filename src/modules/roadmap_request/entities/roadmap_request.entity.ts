/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class roadmap_request{
    @PrimaryGeneratedColumn("increment")
    id:number;
}