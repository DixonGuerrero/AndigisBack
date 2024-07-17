import { BookTransaction } from "../../domain/BookTransaction";
import { BookTransactionRepository } from "../../domain/BookTransactionRepository";


export class BookTransactionGetAll{
   constructor( private repository: BookTransactionRepository){}

   async run(): Promise<BookTransaction[]>{
      return this.repository.getAll();
   }
}