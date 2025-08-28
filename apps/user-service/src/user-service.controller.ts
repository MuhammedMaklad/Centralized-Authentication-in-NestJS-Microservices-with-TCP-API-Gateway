import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user-service.service';
import { UserResponseDto } from './dtos/user-response.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller('user-service')
export class UserServiceController {
  constructor(private readonly userService: UserService) { }

  @Post("create-user")
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userService.create(createUserDto);
    return new UserResponseDto(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    const user = await this.userService.findOne(id);
    return new UserResponseDto(user);
  }

  @Get('all')
  async findAll() {
    return await this.userService.findAllUsers();
  }

  // microservice endpoints
  @MessagePattern({ cmd: "get_user_by_id" })
  async getUserById(@Payload() email: string): Promise<UserResponseDto | null> {
    return this.userService.findByEmail(email);
  }

  @MessagePattern({ cmd: "create_user" })
  async createUser(@Payload() data: CreateUserDto): Promise<UserResponseDto> {
    return this.userService.create(data);
  }
}
