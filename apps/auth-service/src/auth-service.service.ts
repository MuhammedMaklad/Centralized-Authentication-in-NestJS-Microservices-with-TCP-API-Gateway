import { Injectable, Logger } from '@nestjs/common';
import { UserLoginDto } from './dtos/user-login.dto';
import { PasswordUtils } from './utils/password.utils';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class AuthServiceService {
  private readonly logger = new Logger(AuthServiceService.name);
  constructor(
    private readonly jwtService: JwtService
  ) { }

  // async login(userCredentials: UserLoginDto): Promise<string | { token: string }> {
  //   const { email, password } = userCredentials;
  //   const user = await this.userRepository.findByEmail(email);
  //   if (user == null)
  //     return "Invalid User Credentials";

  //   const { password: hashPassword, id, username } = user;
  //   const validPassword: boolean = await PasswordUtils.comparePassword(password, hashPassword);
  //   if (validPassword === false)
  //     return "Invalid User Credentials";


  //   const payload: JwtPayload = {
  //     sub: id,
  //     username: username
  //   };

  //   const token = this.jwtService.sign(payload);
  //   return { token };
  // }
}

