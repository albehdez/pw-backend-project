"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_module_1 = require("./modules/car/car.module");
const inside_module_1 = require("./modules/inside/inside.module");
const car_situation_module_1 = require("./modules/car_situation/car_situation.module");
const driver_module_1 = require("./modules/driver/driver.module");
const driver_situation_module_1 = require("./modules/driver_situation/driver_situation.module");
const driver_category_module_1 = require("./modules/driver_category/driver_category.module");
const vacation_module_1 = require("./modules/vacation/vacation.module");
const programing_module_1 = require("./modules/programing/programing.module");
const programing_type_module_1 = require("./modules/programing_type/programing_type.module");
const country_module_1 = require("./modules/country/country.module");
const turistic_group_module_1 = require("./modules/turistic_group/turistic_group.module");
const role_module_1 = require("./modules/role/role.module");
const change_type_module_1 = require("./modules/change_type/change_type.module");
const change_module_1 = require("./modules/change/change.module");
const request_module_1 = require("./modules/request/request.module");
const request_transport_module_1 = require("./modules/request_transport/request_transport.module");
const roadmap_module_1 = require("./modules/roadmap/roadmap.module");
const roadmap_request_module_1 = require("./modules/roadmap_request/roadmap_request.module");
const transport_module_1 = require("./modules/transport/transport.module");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const mail_module_1 = require("./modules/mail/mail.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'cocoloco02',
                database: 'pw_bd_proyecto_final',
                autoLoadEntities: true,
                synchronize: true,
            }), car_module_1.CarModule, inside_module_1.InsideModule, car_situation_module_1.CarSituationModule, driver_module_1.DriverModule, driver_situation_module_1.DriverSituationModule, driver_category_module_1.DriverCategoryModule, vacation_module_1.VacationModule, programing_module_1.ProgramingModule, programing_type_module_1.ProgramingTypeModule, country_module_1.CountryModule, turistic_group_module_1.TuristicGroupModule, role_module_1.RoleModule, change_type_module_1.ChangeTypeModule, change_module_1.ChangeModule, request_module_1.RequestModule, request_transport_module_1.RequestTransportModule, roadmap_module_1.RoadmapModule, roadmap_request_module_1.RoadmapRequestModule, transport_module_1.TransportModule, user_module_1.UserModule, auth_module_1.AuthModule, mail_module_1.MailModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map