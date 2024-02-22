import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }

  async getStudent(id: string): Promise<Student> {
    return this.findOne({ where: { id } });
  }

  async getAllStudents(): Promise<Student[]> {
    return this.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.find({
      where: {
        id: {
          $in: studentIds,
        } as any,
      },
    });
  }
}
