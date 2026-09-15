import { Injectable } from '@nestjs/common';
import { Library } from './schemas/library.schema.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema.js';
import { title } from 'process';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(Library.name) private libraryModel: Model<Library>,
  ) {}

  async createLibrary(): Promise<Library> {
    const book1 = await this.bookModel.create({
      title: 'Great Expectations',
      author: 'Sumera',
    });
    const book2 = await this.bookModel.create({
      title: 'Biography',
      author: 'Mirza Ghalib',
    });

    const library = await this.libraryModel.create({
      name: 'My Library',
      books: [book1._id, book2._id],
    });
    return library.save();
  }
  async getLibraries(): Promise<Library[]> {
    return this.libraryModel.find().populate('books');
  }
}
