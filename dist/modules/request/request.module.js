"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const request_controller_1 = require("./request.controller");
const request_service_1 = require("./request.service");
const entities_1 = require("./entities");
const entities_2 = require("../transport/entities");
const entities_3 = require("../request_transport/entities");
const entities_4 = require("../turistic_group/entities");
const entities_5 = require("../programing/entities");
const entities_6 = require("../user/entities");
const transport_module_1 = require("../transport/transport.module");
const car_module_1 = require("../car/car.module");
const driver_module_1 = require("../driver/driver.module");
const request_transport_module_1 = require("../request_transport/request_transport.module");
const roadmap_module_1 = require("../roadmap/roadmap.module");
const roadmap_request_module_1 = require("../roadmap_request/roadmap_request.module");
const mail_module_1 = require("../mail/mail.module");
let RequestModule = class RequestModule {
};
exports.RequestModule = RequestModule;
exports.RequestModule = RequestModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.request,
                entities_2.transport,
                entities_3.request_transport,
                entities_4.turistic_group,
                entities_5.programing,
                entities_6.user,
            ]),
            transport_module_1.TransportModule,
            car_module_1.CarModule,
            driver_module_1.DriverModule,
            request_transport_module_1.RequestTransportModule,
            roadmap_module_1.RoadmapModule,
            roadmap_request_module_1.RoadmapRequestModule,
            mail_module_1.MailModule
        ],
        controllers: [request_controller_1.RequestController],
        providers: [request_service_1.RequestService],
    })
], RequestModule);
//# sourceMappingURL=request.module.js.map