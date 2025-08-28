import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthServiceModule, {
    transport: Transport.TCP,
    options: {
      host: "localhost",
      port: 3000,
    }
  });

  await app.listen();
  Logger.log(`Auth Microservice is running TCP Port [3000]`);
}
bootstrap().catch(e => Logger.error(`Error While Bootstrap auth service ${e}`));
