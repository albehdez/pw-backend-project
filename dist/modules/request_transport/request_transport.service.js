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
const entities_2 = require("../request/entities");
const entities_3 = require("../transport/entities");
let RequestTransportService = class RequestTransportService {
    constructor(RTRepository, requestRepository, transportRepository) {
        this.RTRepository = RTRepository;
        this.requestRepository = requestRepository;
        this.transportRepository = transportRepository;
    }
    async get_request_transports() {
        return await this.RTRepository.find({ relations: ['request', 'transport'] });
    }
    async get_request_transport(id) {
        const foundRequest_transport = await this.RTRepository.findOne({ where: { id }, relations: ['request', 'trasnport'] });
        if (!foundRequest_transport) {
            throw new common_1.NotFoundException(`Request Transport with id ${id} not found`);
        }
        return foundRequest_transport;
    }
    async create_request_trasnport({ request, trasnport }) {
        if (request) {
            var foundRequest = await this.requestRepository.findOne({ where: { id: request.id } });
            if (!foundRequest) {
                throw new common_1.NotFoundException(`Request with id ${request.id} does not exist`);
            }
        }
        if (trasnport) {
            var foundTransport = await this.transportRepository.findOne({ where: { id: trasnport.id } });
            if (!foundTransport) {
                throw new common_1.NotFoundException(`Transport with id ${trasnport.id} does not exist`);
            }
        }
        const newRequestTransport = this.RTRepository.create({ request: foundRequest, transport: foundTransport });
        const savedRequestTransport = await this.RTRepository.save(newRequestTransport);
        return savedRequestTransport;
    }
    async delete_request_transport(id) {
        const deleteRequest_transport = await this.get_request_transport(id);
        await this.RTRepository.delete(deleteRequest_transport);
    }
};
exports.RequestTransportService = RequestTransportService;
exports.RequestTransportService = RequestTransportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.request_transport)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.request)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_3.transport)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RequestTransportService);
//# sourceMappingURL=request_transport.service.js.map