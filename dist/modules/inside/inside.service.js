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
exports.InsideService = void 0;
const common_1 = require("@nestjs/common");
const inside_entity_1 = require("./entities/inside.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const PDFDocument = require("pdfkit-table");
let InsideService = class InsideService {
    constructor(insideRepository) {
        this.insideRepository = insideRepository;
    }
    async get_cars_inside() {
        return await this.insideRepository.find({ relations: ['car_situation', 'car'] });
    }
    async get_car_inside(id) {
        const foundInside = await this.insideRepository.findOne({ where: { id }, relations: ['car_situation', 'car'] });
        if (!foundInside) {
            throw new common_1.NotFoundException(`Car with id ${id} not found`);
        }
        return foundInside;
    }
    async delete_car_inside(id) {
        const car_inside = await this.get_car_inside(id);
        await this.insideRepository.delete(car_inside);
    }
    async generatePDF() {
        const cars = await this.insideRepository.find({
            relations: ['car_situation', 'car'],
        });
        const pdfBuffer = await new Promise((resolve) => {
            const doc = new PDFDocument({
                size: "LETTER",
                bufferPages: true,
                autoFirstPage: false,
            });
            let pageNumber = 0;
            doc.on("pageAdded", () => {
                pageNumber++;
                let bottom = doc.page.margins.bottom;
                if (pageNumber > 1) {
                    doc
                        .moveTo(50, 55)
                        .lineTo(doc.page.width - 50, 55)
                        .stroke();
                }
                doc.page.margins.bottom = 0;
                doc.font("Helvetica").fontSize(14);
                doc.text("Pág. " + pageNumber, 0.5 * (doc.page.width - 100), doc.page.height - 50, {
                    width: 100,
                    align: "center",
                    lineBreak: false,
                });
                doc.page.margins.bottom = bottom;
            });
            doc.addPage();
            doc.text("", 0, 400);
            doc.font("Helvetica-Bold").fontSize(24);
            doc.text("CubaTour", {
                width: doc.page.width,
                align: "center",
            });
            doc.moveDown();
            doc.addPage();
            doc.text("", 50, 70);
            doc.fontSize(24);
            doc.moveDown();
            doc.font("Helvetica").fontSize(20);
            const rows = cars.map((insides) => [
                insides.car.license_plate,
                insides.car.brand,
                insides.return_date
            ]);
            const table = {
                title: "Veículos en el interior",
                headers: ["Matrícula", "Marca", "Fecha de regreso"],
                rows: rows,
            };
            doc.table(table, {
                columnsSize: [100, 100, 100],
            });
            const buffer = [];
            doc.on("data", buffer.push.bind(buffer));
            doc.on("end", () => {
                const data = Buffer.concat(buffer);
                resolve(data);
            });
            doc.end();
        });
        return pdfBuffer;
    }
};
exports.InsideService = InsideService;
exports.InsideService = InsideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inside_entity_1.inside)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InsideService);
//# sourceMappingURL=inside.service.js.map