import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExperienceDoc } from 'src/schemas/experience.schema';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel('Experience')
    private readonly Experience: Model<ExperienceDoc>,
  ) {}

  // Get Service
  async getExp() {
    return 'Get Exp';
  }

  // Add Service
  async postExp() {
    return 'Post Exp';
  }

  // Update Service
  async updateExp() {
    return 'Update Exp';
  }

  // Delete Service
  async deleteExp() {
    return 'Delete Exp';
  }
}
