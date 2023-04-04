import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectDto, ProjectUpDto } from 'src/dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  // Get
  @Get()
  async getProject() {
    return this.projectService.getProject();
  }

  // Add
  @Post()
  async postProject(@Body() reqBody: ProjectDto) {
    console.log(reqBody);
    return this.projectService.postProject(reqBody);
  }

  // Update
  @Patch(':id')
  async updateProject(
    @Param() param: { id: string },
    @Body() reqBody: ProjectUpDto,
  ) {
    console.log(param.id);
    console.log(reqBody);
    return this.projectService.updateProject(param.id, reqBody);
  }

  // Delete
  @Delete(':id')
  async deleteProject(@Param() param: { id: string }) {
    console.log(param.id);
    return this.projectService.deleteProject(param.id);
  }
}
