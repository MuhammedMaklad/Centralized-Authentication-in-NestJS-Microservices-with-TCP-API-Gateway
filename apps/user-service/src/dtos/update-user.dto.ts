import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsOptional, MinLength } from "class-validator";




export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['email'] as const)
) {
  // @ApiPropertyOptional()
  @IsOptional()
  @MinLength(6)
  password?: string;
}