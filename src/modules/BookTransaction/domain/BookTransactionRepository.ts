import { BookTransaction } from "./BookTransaction";
import { BookTransactionId } from "./BookTransactionId";

export interface BookTransactionRepository {
   create( book: BookTransaction): Promise<void>;
   getAll(): Promise<BookTransaction[]>;
   getOneById(id: BookTransactionId): Promise<BookTransaction | null>;
   update(book: BookTransaction): Promise<void>;
   delete(id: BookTransactionId): Promise<void>;
}