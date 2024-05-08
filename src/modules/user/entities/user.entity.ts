/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
    @PrimaryGeneratedColumn("increment")
    id:number;
}