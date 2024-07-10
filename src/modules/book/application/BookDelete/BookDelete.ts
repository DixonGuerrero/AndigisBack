import { BookId } from "../../domain/BookId";
import { BookRepository } from "../../domain/BookRepository";

export class BookDelete{
   constructor (private repository: BookRepository){}

   async run(id: string): Promise<void>{
      return this.repository.delete(new BookId(id));
   }
}