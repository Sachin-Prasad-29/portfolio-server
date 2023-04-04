import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperienceModule } from './experience/experience.module';
import { ProjectModule } from './project/project.module';
import { SocialsModule } from './socials/socials.module';
import { TechnologiesModule } from './technologies/technologies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    ExperienceModule,
    ProjectModule,
    SocialsModule,
    TechnologiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
