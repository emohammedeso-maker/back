import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
   console.log("MYSQL_URL:", process.env.MYSQL_URL);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', 
  });

  app.enableCors(); 

  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();
