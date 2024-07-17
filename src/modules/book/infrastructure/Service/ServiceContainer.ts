import { PostgresBookRepository } from "../PostgresBookRepository";
import { BookCreate } from "../../application/BookCreate/BookCreate";
import { BookDelete } from "../../application/BookDelete/BookDelete";
import { BookGetAll } from "../../application/BookGetAll/BookGetAll";
import { BookGetOneById } from "../../application/BookGetOneById/BookGetOneById";
import { BookUpdate } from "../../application/BookUpdate/BookUpdate";
import { InMemoryBookRepository } from "../InMemoryBookRepository";

const BookRepository = new PostgresBookRepository();

export const ServiceContainer = {
   book: {
      getAll: new BookGetAll(BookRepository),
      getOneById: new BookGetOneById(BookRepository),
      create: new BookCreate(BookRepository),
      update: new BookUpdate(BookRepository),
      delete: new BookDelete(BookRepository)
   }
}