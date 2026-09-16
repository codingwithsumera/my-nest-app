import { Controller, Post, Get } from '@nestjs/common';
import { ProjectService } from './project.service.js';

@Controller('project')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}
  @Post('seed')
  getData() {
    return this.service.seed();
  }

  @Get()
  getProjects() {
    return this.service.getProjects();
  }
  @Get('developers')
  getDevelopers() {
    return this.service.getDevelopers();
  }
}
