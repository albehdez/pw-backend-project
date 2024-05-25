import { request } from "src/modules/request/entities";
import { transport } from "src/modules/transport/entities";
export declare class CreateRequestTransportDto {
    request: Partial<request>;
    trasnport: Partial<transport>;
}
