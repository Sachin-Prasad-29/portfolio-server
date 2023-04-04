import { Module } from '@nestjs/common';
import { SocialsController } from './socials.controller';
import { SocialsService } from './socials.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SocialSchema } from 'src/schemas/socials.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Social', schema: SocialSchema },
    ]),
  ],
  controllers: [SocialsController],
  providers: [SocialsService],
})
export class SocialsModule {}
