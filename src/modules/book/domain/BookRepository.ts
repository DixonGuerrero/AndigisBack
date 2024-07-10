import { Book } from "./Book";
import { BookId } from "./BookId";

export interface BookRepository {
   create( book: Book): Promise<void>;
   getAll(): Promise<Book[]>;
   getOneById(id: BookId): Promise<Book | null>;
   update(book: Book): Promise<void>;
   delete(id: BookId): Promise<void>;
}