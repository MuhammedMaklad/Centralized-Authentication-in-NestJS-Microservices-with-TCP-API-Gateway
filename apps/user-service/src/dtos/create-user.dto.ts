import { IsEmail, IsNotEmpty, MinLength } from "class-validator";




export class CreateUserDto {

  @MinLength(6)
  @IsNotEmpty()
  username: string;

  // @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}