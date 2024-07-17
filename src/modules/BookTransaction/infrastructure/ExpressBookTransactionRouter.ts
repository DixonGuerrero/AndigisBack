import { Router } from "express";
import { ExpressBookTransactionController } from "./ExpressBookTransactionController";

const controller = new ExpressBookTransactionController();

const ExpressBookTransactionRouter = Router();

ExpressBookTransactionRouter.get("/book-transaction/", controller.getAll)
ExpressBookTransactionRouter.get("/book-transaction/:id", controller.getOneById)
ExpressBookTransactionRouter.post("/book-transaction/", controller.create)
ExpressBookTransactionRouter.put("/book-transaction/", controller.update)
ExpressBookTransactionRouter.delete("/book-transaction/:id", controller.delete)

export { ExpressBookTransactionRouter }