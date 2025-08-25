import { IsNotEmpty } from "class-validator";

export class LoginRequest {

  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  password: string;
}