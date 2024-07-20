"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTransactionIdBook = void 0;
var BookTransactionIdBook = /** @class */ (function () {
    function BookTransactionIdBook(value) {
        this.value = value;
        this.validateIdBook();
    }
    BookTransactionIdBook.prototype.validateIdBook = function () {
        if (!this.value) {
            throw new Error('BookTransactionIdBook must be a valid string');
        }
    };
    return BookTransactionIdBook;
}());
exports.BookTransactionIdBook = BookTransactionIdBook;
