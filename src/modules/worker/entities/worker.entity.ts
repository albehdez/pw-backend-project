/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class worker{
    @PrimaryGeneratedColumn("increment")
    id:number
}