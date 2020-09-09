import { Injectable } from '@nestjs/common';
import { Book } from './Book';
import { InjectModel } from '@nestjs/mongoose';
import { BookDocument } from './book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(BookDocument.name)
    private readonly bookRepository: Model<BookDocument>,
  ) {}

  addBook(book: Book): Promise<Book> {
    return this.bookRepository.create(book);
  }

  getBook(name: string): Promise<Book | undefined> {
    return this.bookRepository.findOne({ title: name }).exec();
  }

  deleteBook(name: string): Promise<any> {
    return this.bookRepository.remove({ title: name }).exec();
  }

  getBooksOf(author: string): Promise<Book[]> {
    return this.bookRepository.find({ author }).exec();
  }

  getAllBooks() {
    return this.bookRepository.find().exec();
  }

  getTotalNumberOfBooks() {
    return this.bookRepository.countDocuments().exec();
  }
}
