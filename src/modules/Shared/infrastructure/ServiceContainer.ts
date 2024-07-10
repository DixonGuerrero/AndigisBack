import { BookCreate } from "../../book/application/BookCreate/BookCreate";
import { BookDelete } from "../../book/application/BookDelete/BookDelete";
import { BookGetAll } from "../../book/application/BookGetAll/BookGetAll";
import { BookGetOneById } from "../../book/application/BookGetOneById/BookGetOneById";
import { BookUpdate } from "../../book/application/BookUpdate/BookUpdate";
import { InMemoryBookRepository } from "../../book/infrastructure/InMemoryBookRepository";

const BookRepository = new InMemoryBookRepository();

export const ServiceContainer = {
   book: {
      getAll: new BookGetAll(BookRepository),
      getOneById: new BookGetOneById(BookRepository),
      create: new BookCreate(BookRepository),
      update: new BookUpdate(BookRepository),
      delete: new BookDelete(BookRepository)
   }
}