import { BookTransaction } from "../../domain/BookTransaction";
import { BookTransactionDate } from "../../domain/BookTransactionDate";
import { BookTransactionDocument } from "../../domain/BookTransactionDocument";
import { BookTransactionId } from "../../domain/BookTransactionId";
import { BookTransactionIdBook } from "../../domain/BookTransactionIdBook";
import { BookTransactionNotFoundError } from "../../domain/BookTransactionNotFoundError";
import { BookTransactionRepository } from "../../domain/BookTransactionRepository";
import { BookTransactionType } from "../../domain/BookTransactionType";
import { BookTrasactionNameRender } from "../../domain/BookTrasactionNameRender";


export class BookTransactionUpdate {
   constructor( private repository: BookTransactionRepository){}

   async run (id: string , id_libro: string, type: string, date: string, document: string, name_render: string ):Promise<void>{


      const bookTransaction = new BookTransaction(
         new BookTransactionId(id),
         new BookTransactionIdBook(id_libro),
         new BookTransactionType(type),
         new BookTransactionDate(date),
         new BookTransactionDocument(document),
         new BookTrasactionNameRender(name_render)
      );
   

   const bookTransactionExists = await this.repository.getOneById(bookTransaction.id);

   if(!bookTransactionExists){
      throw new BookTransactionNotFoundError('BookTransaction does not exist');
   }

      return this.repository.update(bookTransaction);
   }
}

