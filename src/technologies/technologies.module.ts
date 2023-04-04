import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TechnologySchema } from 'src/schemas/technology.schema';
import { TechnologiesController } from './technologies.controller';
import { TechnologiesService } from './technologies.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Technology', schema: TechnologySchema },
    ]),
  ],
  controllers: [TechnologiesController],
  providers: [TechnologiesService],
})
export class TechnologiesModule {}
