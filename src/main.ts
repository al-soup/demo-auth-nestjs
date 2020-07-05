import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session = require('express-session');
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  await app.use(
    session({
      secret: process.env.JWT_SECRET as string,
      // secret: jwtConstants.secret,
      saveUninitialized: true,
      resave: true,
    }),
  );

  await app.listen(process.env.PORT);
  console.log(`Server started on port ${process.env.PORT}`);
}
bootstrap();
