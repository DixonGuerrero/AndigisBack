import { Book } from "../domain/Book";
import { BookId } from "../domain/BookId";
import { BookRepository } from "../domain/BookRepository";

export class InMemoryBookRepository implements BookRepository {
   private books: Book[] = [];
   
   async getAll(): Promise<Book[]> {
      return this.books;
   }
   
   async getOneById(id: BookId): Promise<Book | null> {
      return this.books.find((book) => book.id.value === id.value) || null;
   }
   
   async create(book: Book): Promise<void> {
      this.books.push(book);
   }

   async update(book: Book): Promise<void> {
      const index = this.books.findIndex((b) => b.id.value === book.id.value);
      this.books[index] = book;
   }
   
   async delete(id: BookId): Promise<void> {
      this.books = this.books.filter((book) => book.id.value !== id.value);
   }
}
