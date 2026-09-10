import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service.js';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAll() {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }
  @Post()
  create(@Body() student: { name: string; age: number }) {
    return this.studentService.createStudent(student);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatedStudent: { name?: string; age?: number },
  ) {
    return this.studentService.updateStudent(Number(id), updatedStudent);
  }
  @Patch(':id')
  patch(
    @Param('id') id: string,
    @Body() updatedStudent: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), updatedStudent);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
