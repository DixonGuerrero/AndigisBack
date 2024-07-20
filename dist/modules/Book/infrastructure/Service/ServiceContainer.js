"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
var PostgresBookRepository_1 = require("../PostgresBookRepository");
var BookCreate_1 = require("../../application/BookCreate/BookCreate");
var BookDelete_1 = require("../../application/BookDelete/BookDelete");
var BookGetAll_1 = require("../../application/BookGetAll/BookGetAll");
var BookGetOneById_1 = require("../../application/BookGetOneById/BookGetOneById");
var BookUpdate_1 = require("../../application/BookUpdate/BookUpdate");
var BookRepository = new PostgresBookRepository_1.PostgresBookRepository();
exports.ServiceContainer = {
    book: {
        getAll: new BookGetAll_1.BookGetAll(BookRepository),
        getOneById: new BookGetOneById_1.BookGetOneById(BookRepository),
        create: new BookCreate_1.BookCreate(BookRepository),
        update: new BookUpdate_1.BookUpdate(BookRepository),
        delete: new BookDelete_1.BookDelete(BookRepository)
    }
};
