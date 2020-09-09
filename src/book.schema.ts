import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'books-gme' })
export class BookDocument extends Document {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  date: string;
}

export const BookSchema = SchemaFactory.createForClass(BookDocument);
