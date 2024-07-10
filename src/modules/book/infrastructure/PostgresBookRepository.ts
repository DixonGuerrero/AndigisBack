import { Pool } from "pg";
import { BookRepository } from "../domain/BookRepository";
import { Book } from "../domain/Book";
import { BookId } from "../domain/BookId";
import { BookName } from "../domain/BookName";
import { BookCopies } from "../domain/BookCopies";
import { BookGenre } from "../domain/BookGenre";
import { BookImageUrl } from "../domain/BookImageUrl";

type BookPostgres = {
   id: string;
   name: string;
   copies: number;
   genre: string;
   image_url: string;
}

export class PostgresBookRepository implements BookRepository {
   client: Pool;

   constructor(database_url: string){
      this.client = new Pool({
         connectionString: database_url
      })
   }

   async create(book: Book): Promise<void> {
      const query = {
         text: 'INSERT INTO books (id, name, copies, genre, image_url) VALUES ($1, $2, $3, $4, $5)',
         values: [book.id.value, book.name.value, book.copies.value, book.genre.value, book.image_url.value]
      }

      await this.client.query(query);
   }

   async getAll(): Promise<Book[]> {
      const query = {
         text: 'SELECT * FROM books'
      }

      const result = await this.client.query<BookPostgres>(query);

      return result.rows.map((book) => this.mapBookToDomain(book));
   }

   async getOneById(id: BookId): Promise<Book | null> {
      const query = {
         text: 'SELECT * FROM books WHERE id = $1',
         values: [id.value]
      }

      const result = await this.client.query<BookPostgres>(query);

      if(result.rows.length === 0){
         return null;
      }

      const book = result.rows[0];

      return this.mapBookToDomain(book)
   }

   async update(book: Book): Promise<void> {
      const query = {
         text: 'UPDATE books SET name = $2, copies = $3, genre = $4, image_url = $5 WHERE id = $1',
         values: [book.id.value, book.name.value, book.copies.value, book.genre.value, book.image_url.value]
      }

      await this.client.query(query);
   }

   async delete(id: BookId): Promise<void> {
      const query = {
         text: 'DELETE FROM books WHERE id = $1',
         values: [id.value]
      }

      await this.client.query(query);
   }

   private mapBookToDomain(book: BookPostgres ): Book {
      return new Book(
         new BookId(book.id),
         new BookName(book.name),
         new BookCopies(book.copies),
         new BookGenre(book.genre),
         new BookImageUrl(book.image_url)
      );
   }
}