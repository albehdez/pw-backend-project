/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { programing } from './entities';
import { programing_type } from '../programing_type/entities';
import { CreateProgramingDto, UpdateProgramingDto } from './dto';
import { MailService } from '../mail/mail.service';
const PDFDocument = require("pdfkit-table");

@Injectable()
export class ProgramingService {

    constructor(@InjectRepository(programing) private readonly programingRepository: Repository<programing>,
    @InjectRepository(programing_type) private readonly programing_typeRepository: Repository<programing_type>,
    private readonly mailService: MailService 
  ){}

    async get_programings():Promise<programing[]>{
        return await this.programingRepository.find({relations:['programing_type']});
    }

    async get_programing(id:number):Promise<programing>{
        const foundPrograming = await this.programingRepository.findOne({where:{id},relations:['programing_type']});
    if(!foundPrograming){
        throw new NotFoundException(`Programing with id ${id} not found`);
    }
    return foundPrograming;
    }
    
    async create_programing({type,start_time,end_time,description,km_to_travel,delay}:CreateProgramingDto) {
        const foundProgramingType= await this.programing_typeRepository.findOne({where:{programing_type:type.programing_type}});
         if (!foundProgramingType) {
            throw new NotFoundException(`Programing type with type ${type.programing_type} not found`);
        }
         if (end_time <= start_time) {
        throw new NotFoundException('End time must be after start time');
        }
        const newPrograming=this.programingRepository.create({programing_type:foundProgramingType,start_time,end_time,description,km_to_travel,delay});
        const savePrograming=await this.programingRepository.save(newPrograming);
        return savePrograming
        }
    async update_programing(id:number,{type,start_time,end_time,description,km_to_travel,delay}:UpdateProgramingDto){
        const programingToUpdate= await this.get_programing(id);
        if(!programingToUpdate){
            throw new NotFoundException(`Programing with id ${id} not found`)
        }
         if (end_time <= start_time) {
        throw new NotFoundException('End time must be after start time');
        }
        if(type){
           const foundProgramingType= await this.programing_typeRepository.findOne({where:{programing_type:type.programing_type}});
         if (!foundProgramingType) {
            throw new NotFoundException(`Programing type with type ${type.programing_type} not found`);
        }
        programingToUpdate.programing_type=foundProgramingType; 
        }
        if(start_time){
            programingToUpdate.start_time=start_time;
        }
        if(end_time){
             programingToUpdate.end_time=end_time;
        }
        if(description){
             programingToUpdate.description=description;
        }
        if(km_to_travel){
             programingToUpdate.km_to_travel=km_to_travel;
        }
        if(delay){
             programingToUpdate.delay=delay;
        }
        const UpdatedPrograming=await this.programingRepository.save(programingToUpdate);

        return UpdatedPrograming;
    }

    async delete_programing(id: number):Promise<void>{
        const programingToDelete= await this.programingRepository.findOne({where:{id}});

        if(!programingToDelete){
             throw new NotFoundException(`Programing with id ${id} not found`)
        }
        await this.programingRepository.remove(programingToDelete);

    }
    async generatePDF(): Promise<Buffer> {
        const programmings = await this.programingRepository.find({
          relations: ["programing_type"],
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
          const rows = programmings.map((programing) => [
            programing.delay,
            programing.description,
            programing.end_time,
            programing.start_time,
            programing.km_to_travel,
            programing.programing_type.programing_type,
          ]);
    
          const table = {
            title: "Programaciones",
            headers: ["Demora", "Descripción","Hora de fin","Hora de inicio","Kilometraje a recorrer","Tipo de programación"],
            rows: rows,
          };
    
          // Configurar el tamaño de las columnas según sea necesario
          doc.table(table, {
            columnsSize: [50, 300, 50,50,50,70],
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

      async sendProgramingInfoEmailAndGeneratePdf(userEmail: string): Promise<void> {
        const pdfBuffer = await this.generatePDF();
        await this.mailService.sendProgramingInfoEmail(userEmail, pdfBuffer);
      }
      
}

