import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { GLOBAL_PREFIX } from './constant/main';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  //! set prefix for auto-service 
  app.setGlobalPrefix(GLOBAL_PREFIX);

  // ! get port of service 
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  Logger.log(`Auth Service is Running on Port ${port}`);
}
bootstrap().catch(e => Logger.error(`Error While Bootstrap auth service ${e}`));
