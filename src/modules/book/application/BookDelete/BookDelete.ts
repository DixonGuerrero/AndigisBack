import { BookId } from "../../domain/BookId";
import { BookNotFoundError } from "../../domain/BookNotFoundError";
import { BookRepository } from "../../domain/BookRepository";

export class BookDelete {
  constructor(private repository: BookRepository) {}

  async run(id: string): Promise<void> {

   const userId = new BookId(id);
    const bookExists = await this.repository.getOneById(userId);

    if (!bookExists) {
      throw new BookNotFoundError("Book does not exist");
    }

    return this.repository.delete(userId);
  }
}
