import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type SocialDoc = HydratedDocument<Social>;

@Schema()
export class Social extends Document {
  @Prop({ required: true })
  logo: string;

  @Prop({ required: true })
  url: string;
}

export const SocialSchema = SchemaFactory.createForClass(Social);
