import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { LoginRequest } from './dtos/loginRequest.dto';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) { }

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post("login")
  async login(@Body() body: LoginRequest) {

  }

}
