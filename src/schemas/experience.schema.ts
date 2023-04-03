import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ExperienceDoc = HydratedDocument<Experience>;

@Schema()
export class Experience extends Document {
  @Prop({ required: true })
  org: string;

  @Prop({ required: true })
  desination: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  period: string;

  @Prop({ required: true })
  url: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
