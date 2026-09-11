import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service.js';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}
  @Get('status')
  getstatus() {
    return { status: this.databaseService.getstatus() };
  }
}
