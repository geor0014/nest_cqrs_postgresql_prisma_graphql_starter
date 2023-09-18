import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsString, IsEmail } from 'class-validator';
@InputType()
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  @IsEmail()
  @MinLength(5)
  @Field()
  email: string;

  @IsString()
  @MinLength(3)
  @Field()
  password: string;
}
