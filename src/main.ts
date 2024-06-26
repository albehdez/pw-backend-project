import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv'


dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule , {cors:true});
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    whitelist:true,
    forbidNonWhitelisted:true,
  }),
)
}
bootstrap();
