import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../../libs/database/src/repositories/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { PasswordUtils } from './utils/password.uitls';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const { email, password } = createUserDto;
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser)
      throw new ConflictException("User with this Email is Exist");
    const hashedPassword = await PasswordUtils.hashPassword(password);

    const user = await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword
    });

    return plainToClass(UserResponseDto, user, { excludeExtraneousValues: true });
  }

  async findOne(id: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return plainToClass(UserResponseDto, user, { excludeExtraneousValues: true });
  }

  async findByEmail(email: string): Promise<UserResponseDto | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return null;
    }
    return plainToClass(UserResponseDto, user, { excludeExtraneousValues: true });
  }

  async validateUser(email: string, password: string): Promise<UserResponseDto | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return null;
    }
    const isPasswordValid = await PasswordUtils.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return null;
    }
    return plainToClass(UserResponseDto, user, { excludeExtraneousValues: true });
  }
}
