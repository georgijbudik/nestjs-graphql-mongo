import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(1)
  @Field((type) => String)
  firstName: string;
  @MinLength(1)
  @Field((type) => String)
  lastName: string;
}
