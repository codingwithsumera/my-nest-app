import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller.js';
import { LibraryService } from './library.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema.js';
import { Library, LibrarySchema } from './schemas/library.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Library.name, schema: LibrarySchema },
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
