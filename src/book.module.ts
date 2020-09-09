import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookDocument, BookSchema } from './book.schema';

@Module({
  imports: [
    MongooseModule.forRoot('MONGO_URI'),
    MongooseModule.forFeature([
      { name: BookDocument.name, schema: BookSchema },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
