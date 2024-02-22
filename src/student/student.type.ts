import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  firstName: string;

  @Field((type) => String)
  lastName: string;
}
