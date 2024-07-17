import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "./Service/ServiceContainer";
import { BookNotFoundError } from "../domain/BookNotFoundError";

export class ExpressBookController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await ServiceContainer.book.getAll.run();

      return res.json(books.map((book) => book.mapToPrimitive())).status(200);
    } catch (error) {
      next(error);
    }
  }

  async getOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await ServiceContainer.book.getOneById.run(req.params.id);

      return res.json(book.mapToPrimitive()).status(200);
    } catch (error) {
      if (error instanceof BookNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, copies, genre, author, image_url } = req.body as {
        name: string;
        copies: number;
        genre: string;
        author: string;
        image_url: string;
      };


      await ServiceContainer.book.create.run(
        name,
        copies,
        genre,
        author,
        image_url
      );


      return res.status(201).send();
    } catch (error) {
     if(error instanceof Error){
       return res.status(400).json({ message: error.message });
     }
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, copies, genre, author, image_url } = req.body as {
        id: string;
        name: string;
        copies: number;
        genre: string;
        author: string;
        image_url: string;
      };

      await ServiceContainer.book.update.run(
        id,
        name,
        copies,
        genre,
        author,
        image_url
      );

      return res.status(204).send();
    } catch (error) {

      if (error instanceof BookNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.book.delete.run(req.params.id);

      return res.status(204).send();
    } catch (error) {
      if (error instanceof BookNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
