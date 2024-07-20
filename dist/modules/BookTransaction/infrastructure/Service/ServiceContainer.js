"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
var BookTransactionCreate_1 = require("../../application/BookTransactionCreate/BookTransactionCreate");
var BookTransactionDelete_1 = require("../../application/BookTransactionDelete/BookTransactionDelete");
var BookTransactionGetAll_1 = require("../../application/BookTransactionGetAll/BookTransactionGetAll");
var BookTransactionGetOneById_1 = require("../../application/BookTransactionGetOneById/BookTransactionGetOneById");
var BookTransactionUpdate_1 = require("../../application/BookTransactionUpdate/BookTransactionUpdate");
var PostgresBookTransactionRepository_1 = require("../PostgresBookTransactionRepository");
var BookTransactionRepository = new PostgresBookTransactionRepository_1.PostgresBookTransactionRepository();
exports.ServiceContainer = {
    bookTransaction: {
        getAll: new BookTransactionGetAll_1.BookTransactionGetAll(BookTransactionRepository),
        getOneById: new BookTransactionGetOneById_1.BookTransactionGetOneById(BookTransactionRepository),
        create: new BookTransactionCreate_1.BookTransactionCreate(BookTransactionRepository),
        update: new BookTransactionUpdate_1.BookTransactionUpdate(BookTransactionRepository),
        delete: new BookTransactionDelete_1.BookTransactionDelete(BookTransactionRepository)
    }
};
