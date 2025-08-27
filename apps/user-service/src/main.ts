import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Create HTTP Application
  const app = await NestFactory.create(UserServiceModule);

  //Create Microservice
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const microserviceApp = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: "localhost",
      port: 3000,
    }
  });

  // Global Pipes and filter
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  // Start both HTTP and microservice
  await app.startAllMicroservices();
  await app.listen(process.env.port ?? 3000);

  Logger.log("User Service is running on: http://localhost:3000");
}
bootstrap().catch(e => Logger.error(e))
