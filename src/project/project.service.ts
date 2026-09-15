import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './schemas/developer.schema.js';
import { Project } from './schemas/project.schemas.js';
import { Model } from 'mongoose';
import { Document } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Developer.name) private developerModel: Model<Developer>,
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async seed(): Promise<{ dev1: Developer; dev2: Developer }> {
    const [project1, project2] = await Promise.all([
      this.projectModel.create({ title: 'Nest JS Part 1' }),

      this.projectModel.create({ title: 'Nest JS Part 2' }),
    ]);

    const [dev1, dev2] = await Promise.all([
      this.developerModel.create({
        name: 'Sumera',
        projects: [project1._id, project2._id],
      }),

      this.developerModel.create({
        name: 'Ahmad',
        projects: [project2._id],
      }),
    ]);
    await Promise.all([
      this.projectModel.findByIdAndUpdate(project1._id, {
        $set: { developers: [dev1._id, dev2._id] },
      }),
      this.projectModel.findByIdAndUpdate(project2._id, {
        $set: { developer: [dev2._id] },
      }),
    ]);
    return { dev1, dev2 };
  }
  async getDevelopers(): Promise<Developer[]> {
    return this.developerModel.find().populate('projects').lean();
  }
  async getProjects(): Promise<Project[]> {
    return this.projectModel.find().populate('developers').lean();
  }
}
