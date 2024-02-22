import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { DataSource, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService extends Repository<Lesson> {
  constructor(private dataSource: DataSource) {
    super(Lesson, dataSource.createEntityManager());
  }

  async getAllLessons(): Promise<Lesson[]> {
    return this.find();
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.findOne({ where: { id } });
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.save(lesson);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.findOne({ where: { id: lessonId } });

    lesson.students = [...lesson.students, ...studentIds];

    return this.save(lesson);
  }
}
