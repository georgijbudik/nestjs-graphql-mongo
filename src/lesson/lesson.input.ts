import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsUUID, MinLength } from 'class-validator';

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

  @IsUUID('4', { each: true })
  @Field((type) => [ID], { defaultValue: [] })
  students: string[];
}
