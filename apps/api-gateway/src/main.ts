import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Logger, ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  await app.listen(process.env.port ?? 3000);
}
bootstrap().
  then(() => { Logger.log(`API Gateway Is Running on Sever --> http://localhost:3000/`) })
  .catch(e => Logger.error(`Error while bootstrap for Api Gateway ${e}`))
