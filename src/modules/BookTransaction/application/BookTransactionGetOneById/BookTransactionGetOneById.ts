import { BookTransaction } from "../../domain/BookTransaction";
import { BookTransactionId } from "../../domain/BookTransactionId";
import { BookTransactionNotFoundError } from "../../domain/BookTransactionNotFoundError";
import { BookTransactionRepository } from "../../domain/BookTransactionRepository";


export class BookTransactionGetOneById {
  constructor(private repository: BookTransactionRepository) {}

  async run(id: string): Promise<BookTransaction>{
    const bookTransaction = await this.repository.getOneById(new BookTransactionId(id));

      if(!bookTransaction){
         throw new BookTransactionNotFoundError('BookTransaction not found');
      }

      return bookTransaction;
  }
}
