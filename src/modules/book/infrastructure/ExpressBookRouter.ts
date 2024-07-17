import { Router } from "express";
import { ExpressBookController } from "./ExpressBookController";

const controller = new ExpressBookController();

const ExpressBookRouter = Router();

ExpressBookRouter.get("/book/", controller.getAll)
ExpressBookRouter.get("/book/:id", controller.getOneById)
ExpressBookRouter.post("/book/", controller.create)
ExpressBookRouter.put("/book/", controller.update)
ExpressBookRouter.delete("/book/:id", controller.delete)

export { ExpressBookRouter }