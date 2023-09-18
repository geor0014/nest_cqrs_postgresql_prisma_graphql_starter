import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
