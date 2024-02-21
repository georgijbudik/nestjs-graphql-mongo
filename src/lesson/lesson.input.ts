import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field((type) => String)
  name: string;

  @IsDateString()
  @Field((type) => String)
  startDate: string;

  @IsDateString()
  @Field((type) => String)
  endDate: string;
}
