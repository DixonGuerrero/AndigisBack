import { Book } from "../../domain/Book";
import { BookAuthor } from "../../domain/BookAuthor";
import { BookCopies } from "../../domain/BookCopies";
import { BookGenre } from "../../domain/BookGenre";
import { BookId } from "../../domain/BookId";
import { BookImageUrl } from "../../domain/BookImageUrl";
import { BookName } from "../../domain/BookName";
import { BookNotFoundError } from "../../domain/BookNotFoundError";
import { BookRepository } from "../../domain/BookRepository";

export class BookUpdate {
   constructor( private repository: BookRepository){}

   async run ( id: string, name: string , copies: number, genre: string, author: string, image_url: string ):Promise<void>{

   const book = new Book(
      new BookId(id),
      new BookName(name),
      new BookCopies(copies),
      new BookGenre(genre),
      new BookAuthor(author),
      new BookImageUrl(image_url)
   )

   const bookExists = await this.repository.getOneById(book.id);

   if(!bookExists){
      throw new BookNotFoundError('Book does not exist');
   }

      return this.repository.update(book);
   }
}