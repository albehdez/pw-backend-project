/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class request_transport{
    @PrimaryGeneratedColumn("increment")
    id:number;
}