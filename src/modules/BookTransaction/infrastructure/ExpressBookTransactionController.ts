import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "./Service/ServiceContainer";
import { BookTransactionNotFoundError } from "../domain/BookTransactionNotFoundError";


export class ExpressBookTransactionController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const booksTransactions = await ServiceContainer.bookTransaction.getAll.run();

      return res.json(booksTransactions.map((bookTransaction) => bookTransaction.mapToPrimitive())).status(200);
    } catch (error) {
      next(error);
    }
  }

  async getOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const bookTransaction = await ServiceContainer.bookTransaction.getOneById.run(req.params.id);

      return res.json(bookTransaction.mapToPrimitive()).status(200);
    } catch (error) {
      if (error instanceof BookTransactionNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_book, type, date, document, name_render} = req.body as {
        id_book: string;
         type: string;
         date: string | Date;
         document: string;
         name_render: string;
      };


      await ServiceContainer.bookTransaction.create.run(
         id_book,
         type,
         date,
         document,
         name_render
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
      const { id, id_book, type, date, document, name_render } = req.body as {
         id: string;
         id_book: string;
         type: string;
         date: string;
         document: string;
         name_render: string;
      };

      await ServiceContainer.bookTransaction.update.run(
        id,
         id_book,
         type,
         date,
         document,
         name_render
      );

      return res.status(204).send();
    } catch (error) {

      if (error instanceof BookTransactionNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.bookTransaction.delete.run(req.params.id);

      return res.status(204).send();
    } catch (error) {
      if (error instanceof BookTransactionNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
