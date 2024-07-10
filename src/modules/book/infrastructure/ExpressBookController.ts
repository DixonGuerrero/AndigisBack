import { Request, Response } from "express";
import { ServiceContainer } from "../../Shared/infrastructure/ServiceContainer";
import { Book } from "../domain/Book";
import { BookNotFoundError } from "../domain/BookNotFoundError";
import { PostgresBookRepository } from "./PostgresBookRepository";
import { BookId } from "../domain/BookId";
import { BookName } from "../domain/BookName";
import { BookCopies } from "../domain/BookCopies";
import { BookGenre } from "../domain/BookGenre";
import { BookImageUrl } from "../domain/BookImageUrl";

export class ExpressBookController {
  async getAll(req: Request, res: Response) {
    const users = await ServiceContainer.book.getAll.run();

    return res.json(users).status(200);
  }

  async getOneById(req: Request, res: Response) {
    try {
      const user = await ServiceContainer.book.getOneById.run(req.params.id);

      return res.json(user).status(200);
    } catch (error) {
      if (error instanceof BookNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      throw error;
    }
  }

  async create(req: Request, res: Response
  ) {

   const { id, name, copies, genre, image_url } = req.body as {
      id: string;
      name: string;
      copies: number;
      genre: string;
      image_url: string;
    }

    await ServiceContainer.book.create.run(
      id,
      name,
      copies,
      genre,
      image_url
    );

    return res.status(201);
  }

   async update(req: Request, res: Response) {
      const { id, name, copies, genre, image_url } = req.body as {
         id: string;
         name: string;
         copies: number;
         genre: string;
         image_url: string;
      }
   
      await ServiceContainer.book.update.run(
         id,
         name,
         copies,
         genre,
         image_url
      );
   
      return res.status(204);
   }

   async delete(req: Request, res: Response) {
      await ServiceContainer.book.delete.run(req.params.id);
   
      return res.status(204);
   }

   
}
