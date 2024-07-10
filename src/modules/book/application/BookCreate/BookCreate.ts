import { Book } from "../../domain/Book";
import { BookCopies } from "../../domain/BookCopies";
import { BookGenre } from "../../domain/BookGenre";
import { BookId } from "../../domain/BookId";
import { BookImageUrl } from "../../domain/BookImageUrl";
import { BookName } from "../../domain/BookName";
import { BookRepository } from "../../domain/BookRepository";

export class BookCreate{
   constructor(private repository: BookRepository){}

   async run ( id: string, name: string , copies: number, genre: string, image_url: string ):Promise<void>{
      const book = new Book(
         new BookId(id),
         new BookName(name),
         new BookCopies(copies),
         new BookGenre(genre),
         new BookImageUrl(image_url)
      );

      return this.repository.create(book);
   }
}