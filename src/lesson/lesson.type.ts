import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  startDate: string;

  @Field((type) => String)
  endDate: string;

  @Field((type) => [StudentType])
  students: string[];
}
