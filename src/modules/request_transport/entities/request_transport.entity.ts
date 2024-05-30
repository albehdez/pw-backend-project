/* eslint-disable prettier/prettier */
import { request } from "src/modules/request/entities";
import { transport } from "src/modules/transport/entities";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class request_transport {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => request, (request) => request.request_transport, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "request_id" })
  request: request;

  @ManyToOne(() => transport, (transport) => transport.request_transport, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "trasnport_id" })
  transport: transport;
}
