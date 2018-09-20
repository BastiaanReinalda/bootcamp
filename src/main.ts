import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use((req, res, next) => {
    console.log(req.headers.origin);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    next();
  }
  );

  const options = new DocumentBuilder()
    .setTitle('Create-A-Poll')
    .setDescription('')
    .setVersion('1.0')
    .addTag('Polls')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3250);
}
bootstrap();
