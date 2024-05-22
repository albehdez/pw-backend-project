import { IsObject } from "class-validator";
import { request } from "src/modules/request/entities";
import { transport } from "src/modules/transport/entities";

export class CreateRequestTransportDto{
    @IsObject()
    request:Partial<request>;

    @IsObject()
    trasnport:Partial<transport>;


}