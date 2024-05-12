"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTransportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let RequestTransportService = class RequestTransportService {
    constructor(requesttRepository) {
        this.requesttRepository = requesttRepository;
    }
    async get_request_transports() {
        return await this.requesttRepository.find({ relations: ['request', 'transport'] });
    }
    async get_request_transport(id) {
        const foundRequest_transport = await this.requesttRepository.findOne({ where: { id }, relations: ['request', 'trasnport'] });
        if (!foundRequest_transport) {
            throw new common_1.NotFoundException(`Request Transport with id ${id} not found`);
        }
        return foundRequest_transport;
    }
    async delete_request_transport(id) {
        const deleteRoadmap_request = await this.get_request_transport(id);
        await this.requesttRepository.delete(deleteRoadmap_request);
    }
};
exports.RequestTransportService = RequestTransportService;
exports.RequestTransportService = RequestTransportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.request_transport)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RequestTransportService);
//# sourceMappingURL=request_transport.service.js.map