import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { AController } from './a/a.controller';

@Module({
  imports: [],
  controllers: [ApiGatewayController, AController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
