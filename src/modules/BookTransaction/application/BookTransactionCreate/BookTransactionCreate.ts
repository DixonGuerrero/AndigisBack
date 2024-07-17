import { v4 as uuid } from 'uuid';
import { BookTransactionRepository } from '../../domain/BookTransactionRepository';
import { BookTransaction } from '../../domain/BookTransaction';
import { BookTransactionId } from '../../domain/BookTransactionId';
import { BookTransactionIdBook } from '../../domain/BookTransactionIdBook';
import { BookTransactionType } from '../../domain/BookTransactionType';
import { BookTransactionDate } from '../../domain/BookTransactionDate';
import { BookTransactionDocument } from '../../domain/BookTransactionDocument';
import { BookTrasactionNameRender } from '../../domain/BookTrasactionNameRender';


export class BookTransactionCreate{
   constructor(private repository: BookTransactionRepository){}

   async run ( id_libro: string, type: string, date: string | Date, document: string, name_render: string  ):Promise<void>{


      const id = uuid();

      const bookTransaction = new BookTransaction(
         new BookTransactionId(id),
         new BookTransactionIdBook(id_libro),
         new BookTransactionType(type),
         new BookTransactionDate(date),
         new BookTransactionDocument(document),
         new BookTrasactionNameRender(name_render)
      );

      return this.repository.create(bookTransaction);
   }
}