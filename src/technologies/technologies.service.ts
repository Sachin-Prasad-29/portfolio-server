import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TechDto, TechUpDto } from 'src/dto';
import { TechnologyDoc } from 'src/schemas/technology.schema';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectModel('Technology')
    private readonly Technology: Model<TechnologyDoc>,
  ) {}

  // Get Service
  async getTech(): Promise<any> {
    return await this.Technology.find();
  }

  // Add Service
  async postTech(data: TechDto): Promise<any> {
    return await this.Technology.create(data);
  }

  // Update Service
  async updateTech(id: string, data: TechUpDto): Promise<any> {
    return await this.Technology.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  // Delete Service
  async deleteTech(id: string): Promise<any> {
    return await this.Technology.findByIdAndDelete(id);
  }
}
