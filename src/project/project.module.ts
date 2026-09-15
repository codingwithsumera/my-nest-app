import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller.js';
import { ProjectService } from './project.service.js';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schemas/developer.schema.js';
import { Project, ProjectSchema } from './schemas/project.schemas.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Developer.name,
        schema: DeveloperSchema,
      },
      {
        name: Project.name,
        schema: ProjectSchema,
      },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
