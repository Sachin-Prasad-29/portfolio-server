import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SocialDto, SocialUpDto } from 'src/dto';
import { SocialsService } from './socials.service';

@Controller('social')
export class SocialsController {
  constructor(private readonly socialsService: SocialsService) {}
  // Get
  @Get()
  async getSocial() {
    return this.socialsService.getSocial();
  }

  // Add
  @Post()
  async postSocial(@Body() reqBody: SocialDto) {
    // console.log(reqBody);
    return this.socialsService.postSocial(reqBody);
  }

  // Update
  @Patch(':id')
  async updateSocial(
    @Param() param: { id: string },
    @Body() reqBody: SocialUpDto,
  ) {
    // console.log(param.id);
    // console.log(reqBody);
    return this.socialsService.updateSocial(param.id, reqBody);
  }

  // Delete
  @Delete(':id')
  async deleteSocial(@Param() param: { id: string }) {
    // console.log(param.id);
    return this.socialsService.deleteSocial(param.id);
  }
}
