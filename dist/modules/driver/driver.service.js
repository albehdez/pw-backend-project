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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const driver_situation_entity_1 = require("../driver_situation/entities/driver_situation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const driver_entitty_1 = require("./entities/driver.entitty");
const vacation_entity_1 = require("../vacation/entities/vacation.entity");
const typeorm_2 = require("typeorm");
const entities_1 = require("../car/entities");
const entities_2 = require("../driver_category/entities");
const PDFDocument = require('pdfkit-table');
let DriverService = class DriverService {
    constructor(driverRepository, driver_situationRepository, driver_categoryRepository, vacationRepository, carRepository) {
        this.driverRepository = driverRepository;
        this.driver_situationRepository = driver_situationRepository;
        this.driver_categoryRepository = driver_categoryRepository;
        this.vacationRepository = vacationRepository;
        this.carRepository = carRepository;
    }
    async get_drivers() {
        return await this.driverRepository.find({ relations: ['driver_situation', 'vacation', 'driver_category'] });
    }
    async get_driver(id) {
        const foundDriver = await this.driverRepository.findOne({ where: { id }, relations: ['driver_situation', 'vacation', 'driver_category'] });
        if (!foundDriver) {
            throw new common_1.NotFoundException(`Driver with id ${id} not found`);
        }
        return foundDriver;
    }
    async create_driver({ name, address, identify_card, permanent_car, situation, category, return_date }) {
        if (permanent_car) {
            const foundCar = await this.carRepository.findOne({ where: { license_plate: permanent_car } });
            if (!foundCar) {
                throw new common_1.NotFoundException(`Car with license plate ${permanent_car} does not exist`);
            }
        }
        const foundSituation = await this.driver_situationRepository.findOne({ where: { type_situation: situation.type_situation } });
        const foundCategory = await this.driver_categoryRepository.findOne({ where: { type_category: category.type_category } });
        if (!foundSituation) {
            throw new common_1.NotFoundException(`Driver situation with type ${situation.type_situation} not found`);
        }
        if (!foundCategory) {
            throw new common_1.NotFoundException(`Driver category with type ${category.type_category} not found`);
        }
        const foundIdentifyCard = await this.driverRepository.findOne({ where: { identify_card } });
        if (foundIdentifyCard) {
            throw new common_1.NotFoundException(`Driver with identify card ${identify_card} already exists`);
        }
        const newDriver = this.driverRepository.create({
            name,
            address,
            identify_card,
            permanent_car,
            driver_situation: foundSituation,
            driver_category: foundCategory,
        });
        const savedDriver = await this.driverRepository.save(newDriver);
        if (return_date && situation.type_situation === "Vacation") {
            const newVacation = this.vacationRepository.create({
                return_date,
                situation: foundSituation,
                driver: savedDriver
            });
            await this.vacationRepository.save(newVacation);
        }
        return savedDriver;
    }
    async update_driver(id, { name, address, identify_card, permanent_car, situation, return_date }) {
        const driverToUpdate = await this.get_driver(id);
        if (!driverToUpdate) {
            throw new common_1.NotFoundException(`Driver with id ${id} not found`);
        }
        if (situation) {
            const foundSituation = await this.driver_situationRepository.findOne({ where: { type_situation: situation.type_situation } });
            if (!foundSituation) {
                throw new common_1.NotFoundException(`Driver situation with type ${situation.type_situation} not found`);
            }
            driverToUpdate.driver_situation = foundSituation;
        }
        if (name) {
            driverToUpdate.name = name;
        }
        if (address) {
            driverToUpdate.address = address;
        }
        if (identify_card) {
            driverToUpdate.identify_card = identify_card;
        }
        if (permanent_car) {
            const foundCar = await this.carRepository.findOne({ where: { license_plate: permanent_car } });
            if (!foundCar) {
                throw new common_1.NotFoundException(`Car with license plate ${permanent_car} does not exist`);
            }
            driverToUpdate.permanent_car = permanent_car;
        }
        else {
            driverToUpdate.permanent_car = null;
        }
        const updatedDriver = await this.driverRepository.save(driverToUpdate);
        if (situation && return_date && situation.type_situation === "Vacation") {
            const foundSituation = await this.driver_situationRepository.findOne({ where: { type_situation: situation.type_situation } });
            if (!foundSituation) {
                throw new common_1.NotFoundException(`Driver situation with type ${situation.type_situation} not found`);
            }
            let vacationEntry = await this.vacationRepository.findOne({ where: { driver: updatedDriver } });
            if (!vacationEntry) {
                const newVacation = this.vacationRepository.create({ return_date, situation: foundSituation, driver: updatedDriver });
                vacationEntry = await this.vacationRepository.save(newVacation);
            }
            else {
                vacationEntry.return_date = return_date;
                vacationEntry.situation = foundSituation;
                await this.vacationRepository.save(vacationEntry);
            }
        }
        else {
            await this.vacationRepository.delete({ driver: updatedDriver });
        }
        const updatedDriverWithVacation = await this.driverRepository.findOne({ where: { id: updatedDriver.id }, relations: ['vacation'] });
        return updatedDriverWithVacation;
    }
    async delete_driver(id) {
        const driverToDelete = await this.driverRepository.findOne({ where: { id } });
        if (!driverToDelete) {
            throw new common_1.NotFoundException(`Driver with id ${id} not found`);
        }
        const vacationEntry = await this.vacationRepository.findOne({ where: { driver: driverToDelete } });
        if (vacationEntry) {
            await this.vacationRepository.remove(vacationEntry);
        }
        await this.driverRepository.remove(driverToDelete);
    }
    async generatePDF() {
        const drivers = await this.driverRepository.find({ relations: ['driver_situation', 'driver_category'] });
        const pdfBuffer = await new Promise(resolve => {
            const doc = new PDFDocument({
                size: "LETTER",
                bufferPages: true,
                autoFirstPage: false,
            });
            let pageNumber = 0;
            doc.on('pageAdded', () => {
                pageNumber++;
                let bottom = doc.page.margins.bottom;
                if (pageNumber > 1) {
                    doc.moveTo(50, 55)
                        .lineTo(doc.page.width - 50, 55)
                        .stroke();
                }
                doc.page.margins.bottom = 0;
                doc.font("Helvetica").fontSize(14);
                doc.text('Pág. ' + pageNumber, 0.5 * (doc.page.width - 100), doc.page.height - 50, {
                    width: 100,
                    align: 'center',
                    lineBreak: false,
                });
                doc.page.margins.bottom = bottom;
            });
            doc.addPage();
            doc.text('', 0, 400);
            doc.font("Helvetica-Bold").fontSize(24);
            doc.text("CubaTour", {
                width: doc.page.width,
                align: 'center'
            });
            doc.moveDown();
            doc.addPage();
            doc.text('', 50, 70);
            doc.fontSize(24);
            doc.moveDown();
            doc.font("Helvetica").fontSize(20);
            const rows = drivers.map(driver => [
                driver.name,
                driver.permanent_car ? driver.permanent_car : '-',
                driver.driver_situation.type_situation,
                driver.driver_category.type_category,
                driver.address,
                driver.identify_card,
            ]);
            const table = {
                title: "Choferes",
                headers: ["Nombre", "Carro permanernte", "Situación", "Categoría", "Dirección", "Identificación"],
                rows: rows
            };
            doc.table(table, {
                columnsSize: [100, 100, 100, 100, 100, 100],
            });
            const buffer = [];
            doc.on('data', buffer.push.bind(buffer));
            doc.on('end', () => {
                const data = Buffer.concat(buffer);
                resolve(data);
            });
            doc.end();
        });
        return pdfBuffer;
    }
};
exports.DriverService = DriverService;
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entitty_1.driver)),
    __param(1, (0, typeorm_1.InjectRepository)(driver_situation_entity_1.driver_situation)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_2.driver_category)),
    __param(3, (0, typeorm_1.InjectRepository)(vacation_entity_1.vacation)),
    __param(4, (0, typeorm_1.InjectRepository)(entities_1.car)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DriverService);
//# sourceMappingURL=driver.service.js.map