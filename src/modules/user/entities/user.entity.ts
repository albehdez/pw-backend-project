/* eslint-disable prettier/prettier */
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { role } from "src/modules/role/entities/role.entity";

@Entity()
export class user {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  /* @DeleteDateColumn() 
    deletedAt: Date; */

  @ManyToOne(() => role, (user_role) => user_role.users, { cascade: true })
  @JoinColumn({ name: "role_id" })
  role: role;
}
