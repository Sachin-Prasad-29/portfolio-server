import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type TechnologyDoc = HydratedDocument<Technology>;

@Schema()
export class Technology extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  logo: string;

  @Prop({ required: true })
  color: string;

  @Prop({ default: '' })
  url: string;
}

export const TechnologySchema = SchemaFactory.createForClass(Technology);
