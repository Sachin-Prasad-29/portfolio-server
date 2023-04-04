import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocialDto, SocialUpDto } from 'src/dto';
import { SocialDoc } from 'src/schemas/socials.schema';

@Injectable()
export class SocialsService {
  constructor(
    @InjectModel('Social')
    private readonly Social: Model<SocialDoc>,
  ) {}

  // Get Service
  async getSocial(): Promise<any> {
    return await this.Social.find();
  }

  // Add Service
  async postSocial(data: SocialDto): Promise<any> {
    return await this.Social.create(data);
  }

  // Update Service
  async updateSocial(id: string, data: SocialUpDto): Promise<any> {
    return await this.Social.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  // Delete Service
  async deleteSocial(id: string): Promise<any> {
    return await this.Social.findByIdAndDelete(id);
  }
}
