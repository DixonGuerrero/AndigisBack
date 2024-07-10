import { Book } from "../../domain/Book";
import { BookId } from "../../domain/BookId";
import { BookNotFoundError } from "../../domain/BookNotFoundError";
import { BookRepository } from "../../domain/BookRepository";

export class BookGetOneById {
  constructor(private repository: BookRepository) {}

  async run(id: string): Promise<Book>{
    const user = await this.repository.getOneById(new BookId(id));

      if(!user){
         throw new BookNotFoundError('Book not found');
      }

      return user;
  }
}
