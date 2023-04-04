import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDto, ProjectUpDto } from 'src/dto';
import { ProjectDoc } from 'src/schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('Project')
    private readonly Project: Model<ProjectDoc>,
  ) {}

  // Get Service
  async getProject(): Promise<any> {
    return await this.Project.find();
  }

  // Add Service
  async postProject(data: ProjectDto): Promise<any> {
    return await this.Project.create(data);
  }

  // Update Service
  async updateProject(id: string, data: ProjectUpDto): Promise<any> {
    return await this.Project.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  // Delete Service
  async deleteProject(id: string): Promise<any> {
    return await this.Project.findByIdAndDelete(id);
  }
}
