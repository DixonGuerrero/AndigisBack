"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressBookRouter = void 0;
var express_1 = require("express");
var ExpressBookController_1 = require("./ExpressBookController");
var controller = new ExpressBookController_1.ExpressBookController();
var ExpressBookRouter = (0, express_1.Router)();
exports.ExpressBookRouter = ExpressBookRouter;
ExpressBookRouter.get("/book/", controller.getAll);
ExpressBookRouter.get("/book/:id", controller.getOneById);
ExpressBookRouter.post("/book/", controller.create);
ExpressBookRouter.put("/book/", controller.update);
ExpressBookRouter.delete("/book/:id", controller.delete);