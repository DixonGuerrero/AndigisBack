import { Book } from "../../domain/Book";
import { BookRepository } from "../../domain/BookRepository";

export class BookGetAll{
   constructor( private repository: BookRepository){}

   async run(): Promise<Book[]>{
      return this.repository.getAll();
   }
}