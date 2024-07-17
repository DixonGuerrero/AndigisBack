import { BookTransactionId } from "../../domain/BookTransactionId";
import { BookTransactionNotFoundError } from "../../domain/BookTransactionNotFoundError";
import { BookTransactionRepository } from "../../domain/BookTransactionRepository";


export class BookTransactionDelete {
  constructor(private repository: BookTransactionRepository) {}

  async run(id: string): Promise<void> {

   const bookTransactionId = new BookTransactionId(id);
    const bookTransactionExists = await this.repository.getOneById(bookTransactionId);

    if (!bookTransactionExists) {
      throw new BookTransactionNotFoundError("BookTransaction does not exist");
    }

    return this.repository.delete(bookTransactionId);
  }
}
