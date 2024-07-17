
import { BookId } from '../domain/BookId';
import { BookName } from '../domain/BookName';
import { BookCopies } from '../domain/BookCopies';
import { BookGenre } from '../domain/BookGenre';
import { BookImageUrl } from '../domain/BookImageUrl';
import { BookAuthor } from '../domain/BookAuthor';
import { BookRepository } from '../domain/BookRepository';
import { Book } from '../domain/Book';
import BookModel from './ModelPostgres/BookModel';

interface BookDTO {
   id: string;
   name: string;
   copies: number;
   genre: string;
   author: string;
   image_url: string;
 }
 

export class PostgresBookRepository implements BookRepository {
   async create(book: Book): Promise<void>{
      await BookModel.create({
         id: book.id.value,
         name: book.name.value,
         copies: book.copies.value,
         genre: book.genre.value,
         author: book.author.value,
         image_url: book.image_url.value,
      });
   }

   async getAll(): Promise<Book[]> {
      const books = await BookModel.findAll() as BookDTO[];
      return books.map(book => this.mapBookToDomain(book));
   }

   async getOneById(id: BookId):Promise<Book | null> {
      const book = await BookModel.findByPk(id.value);
      if (!book) return null;
      return this.mapBookToDomain(book);
   }

   async update(book: Book): Promise<void> {
      await BookModel.update({
         name: book.name.value,
         copies: book.copies.value,
         genre: book.genre.value,
         image_url: book.image_url.value,
      }, {
         where: { id: book.id.value }
      });
   }

   async delete(id: BookId): Promise<void> {
      await BookModel.destroy({
         where: { id: id.value }
      });
   }

   mapBookToDomain(book : BookDTO): Book {
      return new Book(
         new BookId(book.id),
         new BookName(book.name),
         new BookCopies(book.copies),
         new BookGenre(book.genre),
         new BookAuthor(book.author),
         new BookImageUrl(book.image_url)
      );
   }  
}
