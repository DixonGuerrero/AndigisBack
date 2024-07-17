import { BookTransactionCreate } from "../../application/BookTransactionCreate/BookTransactionCreate";
import { BookTransactionDelete } from "../../application/BookTransactionDelete/BookTransactionDelete";
import { BookTransactionGetAll } from "../../application/BookTransactionGetAll/BookTransactionGetAll";
import { BookTransactionGetOneById } from "../../application/BookTransactionGetOneById/BookTransactionGetOneById";
import { BookTransactionUpdate } from "../../application/BookTransactionUpdate/BookTransactionUpdate";
import { PostgresBookTransactionRepository } from "../PostgresBookTransactionRepository";


const BookTransactionRepository = new PostgresBookTransactionRepository();

export const ServiceContainer = {
   bookTransaction: {
      getAll: new BookTransactionGetAll(BookTransactionRepository),
      getOneById: new BookTransactionGetOneById(BookTransactionRepository),
      create: new BookTransactionCreate(BookTransactionRepository),
      update: new BookTransactionUpdate(BookTransactionRepository),
      delete: new BookTransactionDelete(BookTransactionRepository)
   }
}