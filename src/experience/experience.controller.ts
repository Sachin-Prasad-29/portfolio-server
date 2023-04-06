import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExpDto, ExpUpDto } from 'src/dto';
import { ExperienceService } from './experience.service';

@Controller('exp')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}
  // Get
  @Get()
  async getExp() {
    return this.experienceService.getExp();
  }

  // Add
  @Post()
  async postExp(@Body() reqBody: ExpDto) {
    // console.log(reqBody);
    return this.experienceService.postExp(reqBody);
  }

  // Update
  @Patch(':id')
  updateExp(@Param() param: { id: string }, @Body() reqBody: ExpUpDto) {
    // console.log(param.id);
    // console.log(reqBody);
    return this.experienceService.updateExp(param.id, reqBody);
  }

  // Delete
  @Delete(':id')
  deleteExp(@Param() param: { id: string }) {
    // console.log(param.id);
    return this.experienceService.deleteExp(param.id);
  }
}
