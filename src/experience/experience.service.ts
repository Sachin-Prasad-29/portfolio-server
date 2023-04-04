import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpDto, ExpUpDto } from 'src/dto';
import { ExperienceDoc } from 'src/schemas/experience.schema';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel('Experience')
    private readonly Experience: Model<ExperienceDoc>,
  ) {}

  // Get Service
  async getExp(): Promise<any> {
    return await this.Experience.find();
  }

  // Add Service
  async postExp(data: ExpDto): Promise<any> {
    return await this.Experience.create(data);
  }

  // Update Service
  async updateExp(id: string, data: ExpUpDto): Promise<any> {
    return await this.Experience.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  // Delete Service
  async deleteExp(id: string): Promise<any> {
    return await this.Experience.findByIdAndDelete(id);
  }
}
