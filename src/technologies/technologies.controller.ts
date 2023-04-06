import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TechDto, TechUpDto } from 'src/dto';
import { TechnologiesService } from './technologies.service';

@Controller('tech')
export class TechnologiesController {
  constructor(private readonly technologyService: TechnologiesService) {}
  // Get
  @Get()
  async getExp() {
    return this.technologyService.getTech();
  }

  // Add
  @Post()
  async postTech(@Body() reqBody: TechDto) {
    // console.log(reqBody);
    return this.technologyService.postTech(reqBody);
  }

  // Update
  @Patch(':id')
  async updateTech(@Param() param: { id: string }, @Body() reqBody: TechUpDto) {
    // console.log(param.id);
    // console.log(reqBody);
    return this.technologyService.updateTech(param.id, reqBody);
  }

  // Delete
  @Delete(':id')
  async deleteTech(@Param() param: { id: string }) {
    // console.log(param.id);
    return this.technologyService.deleteTech(param.id);
  }
}
