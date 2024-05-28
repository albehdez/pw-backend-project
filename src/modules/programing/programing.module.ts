/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProgramingService } from './programing.service';
import { ProgramingController } from './programing.controller';
import { programing } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { programing_type } from '../programing_type/entities';
import { MailModule } from '../mail/mail.module';

@Module({
     imports: [TypeOrmModule.forFeature([programing,programing_type]),MailModule],
    controllers:[ProgramingController],
    providers:[ProgramingService]
     
})
export class ProgramingModule {}
