import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './entities';
import { role } from '../role/entities';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [TypeOrmModule.forFeature([user,role]),
  MailModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
