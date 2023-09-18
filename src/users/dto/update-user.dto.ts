import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsString, IsEmail } from 'class-validator';
@InputType()
export class updateUserDto {
  @IsString()
  @MinLength(3)
  @Field(() => String, { nullable: true })
  name?: string;

  @IsEmail()
  @MinLength(5)
  @Field(() => String, { nullable: true })
  email?: string;

  @IsString()
  @MinLength(3)
  @Field(() => String, { nullable: true })
  password?: string;
}
