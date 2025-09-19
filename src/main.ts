import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import 'dotenv/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const apiPrefix = process.env.API_PREFIX ?? '';
  const swaggerPrefix = process.env.SWAGGER_PREFIX ?? 'swagger';
  const port = process.env.PORT ?? 3000;
  const host = process.env.HOST ?? 'http://localhost';

  app.setGlobalPrefix(apiPrefix);

  const config = new DocumentBuilder()
    .setTitle('AI-event API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPrefix, app, documentFactory, {
    customSiteTitle: 'AI-event API',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  await app.listen(port ?? 3000);

  logger.log(`Server started at ${host}:${port}/`);
  logger.log(
    `Api available at ${host}:${port}/${apiPrefix ? `${apiPrefix}/` : ''}`,
  );
  logger.log(`Swagger available at ${host}:${port}/${swaggerPrefix}/`);
}
bootstrap();
