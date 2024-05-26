/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { country } from '../country/entities';
import { turistic_group } from './entities';
import { CreateTuristicGroupDto, UpdateTuristicGroupDto } from './dto';
const PDFDocument = require('pdfkit-table');

@Injectable()
export class TuristicGroupService {
    constructor(@InjectRepository(turistic_group) private readonly turistic_groupRepository:Repository<turistic_group>,@InjectRepository(country) private readonly countryRepository:Repository<country>){}

    async get_turistic_groups():Promise<turistic_group[]>{
        return await this.turistic_groupRepository.find({relations:["country"]});
    }

    async get_turistic_group(id:number):Promise<turistic_group>{
        const turistic_group=await this.turistic_groupRepository.findOne({where:{id}, relations:['country']});

        if(!turistic_group){
         throw new NotFoundException(`Turistic Group with id ${id} not found`);
        }
        return turistic_group;
    }

    async create_turistic_group({ number_turist, country }: CreateTuristicGroupDto): Promise<turistic_group> {
    const foundCountry = await this.countryRepository.findOne({ where: { name: country.name } });
    if (!foundCountry) {
        throw new NotFoundException(`Country with name ${country.name} not found`);
    }

    let cityInitials = foundCountry.name.slice(0, 3).toUpperCase();
    let randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    let id_group = `${cityInitials}${number_turist}${randomNumbers}`;

    
    let uniqueIdGroup = false;
    while (!uniqueIdGroup) {
        const existingGroup = await this.turistic_groupRepository.findOne({ where: { id_group } });
        if (existingGroup) {
           
            randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
            id_group = `${cityInitials}${number_turist}${randomNumbers}`;
        } else {
            uniqueIdGroup = true;
        }
    }

    const newTuristic_group = this.turistic_groupRepository.create({ id_group, number_turist, country: foundCountry });
    const savedTuristic_group = await this.turistic_groupRepository.save(newTuristic_group);

    return savedTuristic_group;
}

    async update_turistic_group(id: number, { number_turist, country }: UpdateTuristicGroupDto): Promise<turistic_group> {
    const turistic_groupToUpdate = await this.get_turistic_group(id);
    if (!turistic_groupToUpdate) {
        throw new NotFoundException(`Turistic Group with id ${id} not found`);
    }

    if (country) {
        const foundCountry = await this.countryRepository.findOne({ where: { name: country.name } });
        if (!foundCountry) {
            throw new NotFoundException(`Country with name ${country.name} not found`);
        }
        turistic_groupToUpdate.country = foundCountry;
    }
    if (number_turist) {
        turistic_groupToUpdate.number_turist = number_turist;
    }    
    let cityInitials = turistic_groupToUpdate.country.name.slice(0, 3).toUpperCase();
    let randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    let newGroupId = `${cityInitials}${turistic_groupToUpdate.number_turist}${randomNumbers}`;    
    let uniqueGroupId = false;
    while (!uniqueGroupId) {
        const existingGroup = await this.turistic_groupRepository.findOne({ where: { id_group: newGroupId } });
        if (existingGroup && existingGroup.id!== turistic_groupToUpdate.id) {            
            randomNumbers = Math.floor(Math.random() * 100).toString().padStart(2, '0');
            newGroupId = `${cityInitials}${turistic_groupToUpdate.number_turist}${randomNumbers}`;
        } else {
            uniqueGroupId = true; 
        }
    }
    turistic_groupToUpdate.id_group = newGroupId;
    const updateTuristicGroup = await this.turistic_groupRepository.save(turistic_groupToUpdate);
    return updateTuristicGroup;
}

    async delete_turistic_group(id: number): Promise<void> {
        const turistic_groupToDelete = await this.turistic_groupRepository.findOne({where: { id }});
        if (!turistic_groupToDelete) {
            throw new NotFoundException(`Turistic Group with id ${id} not found`);
        }
        await this.turistic_groupRepository.remove(turistic_groupToDelete);
    }

    async generatePDF(): Promise<Buffer> {
        const turistic_groups = await this.turistic_groupRepository.find({
          relations: ["country"],
        });
    
        const pdfBuffer: Buffer = await new Promise((resolve) => {
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
            doc.text(
              "Pág. " + pageNumber,
              0.5 * (doc.page.width - 100),
              doc.page.height - 50,
              {
                width: 100,
                align: "center",
                lineBreak: false,
              }
            );
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
    
          // Preparar los datos de la tabla
          const rows = turistic_groups.map((turistic_group) => [
            turistic_group.id_group,
            turistic_group.number_turist,
            turistic_group.country.name
        
          ]);
    
          const table = {
            title: "Grupos turísticos:",
            headers: ["Código","Cantidad de turistas","País de origen"],
            rows: rows,
          };
    
          // Configurar el tamaño de las columnas según sea necesario
          doc.table(table, {
            columnsSize: [100,100,100],
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
}