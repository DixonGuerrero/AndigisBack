import { v4 as uuid } from 'uuid';
import { Book } from "../../domain/Book";
import { BookCopies } from "../../domain/BookCopies";
import { BookGenre } from "../../domain/BookGenre";
import { BookId } from "../../domain/BookId";
import { BookImageUrl } from "../../domain/BookImageUrl";
import { BookName } from "../../domain/BookName";
import { BookRepository } from "../../domain/BookRepository";
import { BookAuthor } from '../../domain/BookAuthor';

export class BookCreate{
   constructor(private repository: BookRepository){}

   async run ( name: string , copies: number, genre: string, author:string , image_url: string ):Promise<void>{

      const id = uuid();

      const book = new Book(
         new BookId(id),
         new BookName(name),
         new BookCopies(copies),
         new BookGenre(genre),
         new BookAuthor(author),
         new BookImageUrl(image_url)
      );

      return this.repository.create(book);
   }
}