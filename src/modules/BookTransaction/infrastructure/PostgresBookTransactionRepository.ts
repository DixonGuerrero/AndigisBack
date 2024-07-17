import { BookTransaction } from "../domain/BookTransaction";
import { BookTransactionDate } from "../domain/BookTransactionDate";
import { BookTransactionDocument } from "../domain/BookTransactionDocument";
import { BookTransactionId } from "../domain/BookTransactionId";
import { BookTransactionIdBook } from "../domain/BookTransactionIdBook";
import { BookTransactionRepository } from "../domain/BookTransactionRepository";
import { BookTransactionType } from "../domain/BookTransactionType";
import { BookTrasactionNameRender } from "../domain/BookTrasactionNameRender";
import BookTransactionModel from "./ModelPostgres/BookTransactionModel";



interface BookTransactionDTO {
   id: string;
   id_book: string;
   type: string;
   date: string | Date;
   document: string;
   name_render: string ;

 }
 

export class PostgresBookTransactionRepository implements BookTransactionRepository {
   async create(bookTransaction: BookTransaction): Promise<void>{
      await BookTransactionModel.create({
         id: bookTransaction.id.value,
         id_book: bookTransaction.id_book.value,
         type: bookTransaction.type.value,
         date: bookTransaction.date.value,
         document: bookTransaction.document.value,
         name_render: bookTransaction.name_render.value
      });
   }

   async getAll(): Promise<BookTransaction[]> {
      const booksTransaction = await BookTransactionModel.findAll() as BookTransactionDTO[];
      return booksTransaction.map(bookTransaction => this.mapBookToDomain(bookTransaction));
   }

   async getOneById(id: BookTransactionId):Promise<BookTransaction | null> {
      const bookTransaction = await BookTransactionModel.findByPk(id.value);
      if (!bookTransaction) return null;
      return this.mapBookToDomain(bookTransaction);
   }

   async update(book: BookTransaction): Promise<void> {
      await BookTransactionModel.update({
         id_book: book.id_book.value,
         type: book.type.value,
         date: book.date.value,
         document: book.document.value,
      }, {
         where: { id: book.id.value }
      });
   }

   async delete(id: BookTransactionId): Promise<void> {
      await BookTransactionModel.destroy({
         where: { id: id.value }
      });
   }

   mapBookToDomain(book : BookTransactionDTO): BookTransaction {
    return new BookTransaction(
         new BookTransactionId(book.id),
         new BookTransactionIdBook(book.id_book),
         new BookTransactionType(book.type),
         new BookTransactionDate(book.date),
         new BookTransactionDocument(book.document),
         new BookTrasactionNameRender(book.name_render)
    )
   }  
}
