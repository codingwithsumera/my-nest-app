import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Sumera Shafi',
      age: 25,
    },
    {
      id: 2,
      name: 'Ali Raza',
      age: 23,
    },
  ];
  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student)
      throw new NotFoundException(`Student with ID ${id} not found`);
    return student;
  }

  //POST
  createStudent(student: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...student,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //PUT
  updateStudent(id: number, updatedStudent: { name?: string; age?: number }) {
    const index: number = this.students.findIndex(
      (student) => student.id === id,
    );
    if (index === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);
    this.students[index] = { ...this.students[index], ...updatedStudent };
    return this.students[index];
  }

  //patch
  patchStudent(
    id: number,
    updatedFields: Partial<{ name: string; age: number }>,
  ) {
    const student: number = this.students.findIndex(
      (student) => student.id === id,
    );
    if (student === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);
    this.students[student] = { ...this.students[student], ...updatedFields };
    return this.students[student];
  }

  //delete
  deleteStudent(id: number) {
    const index: number = this.students.findIndex(
      (student) => student.id === id,
    );
    if (index === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);
    const deletedStudent = this.students.splice(index, 1);
    return {
      message: `Student with ID ${id} deleted`,
      student: deletedStudent[0],
    };
  }
}
