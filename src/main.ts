import * as dotenv from 'dotenv';
dotenv.config()

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
      .setTitle('Users-Cats service')
      .setSchemes('http', 'https')
      .setDescription('Users-Cats service swagger module')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/_docs', app, document, {
      customSiteTitle: 'Users-Cats api',
  });
  await app.listen(3000);
}
bootstrap();
