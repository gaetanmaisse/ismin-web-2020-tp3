import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Book';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks(@Query('author') author): Promise<Book[]> {
    if (author) {
      return this.bookService.getBooksOf(author);
    }
    return this.bookService.getAllBooks();
  }

  @Post()
  createBook(@Body() newBook: Book): Promise<Book | undefined> {
    return this.bookService.addBook(newBook);
  }

  @Get('/:title')
  getBook(@Param('title') title): Promise<Book | undefined> {
    return this.bookService.getBook(title);
  }

  @Delete('/:title')
  deleteBook(@Param('title') title): Promise<void> {
    return this.bookService.deleteBook(title);
  }
}
