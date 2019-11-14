import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generateSwagger(app);
  await app.listen(3000);
}

function generateSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('Contact API')
    .setDescription(`Restfull API for CRUD Contact`)
    .setVersion(`1.0.0`)
    .setSchemes('http', 'https')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui', app, document);
}
bootstrap();
