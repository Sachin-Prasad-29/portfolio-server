import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('exp')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}
  // Get
  @Get()
  getExp() {
    return this.experienceService.getExp();
  }

  // Add
  @Post()
  postExp() {
     return this.experienceService.postExp();
  }

  // Update
  @Patch()
  updateExp() {
     return this.experienceService.updateExp();
  }

  // Delete
  @Delete()
  deleteExp() {
     return this.experienceService.deleteExp();
  }
}
