import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ProjectDoc = HydratedDocument<Project>;

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  techstack: string[];

  @Prop({ required: true })
  repoUrl: string;

  @Prop({ default: '' })
  liveUrl: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
