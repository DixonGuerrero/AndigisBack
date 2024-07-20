"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTransaction = void 0;
var BookTransaction = /** @class */ (function () {
    function BookTransaction(id, id_book, type, date, document, name_render) {
        this.id = id;
        this.id_book = id_book;
        this.type = type;
        this.date = date;
        this.document = document;
        this.name_render = name_render;
    }
    BookTransaction.prototype.mapToPrimitive = function () {
        return {
            id: this.id.value,
            id_book: this.id_book.value,
            type: this.type.value,
            date: this.date.toString(),
            document: this.document.value,
            name_render: this.name_render.value
        };
    };
    return BookTransaction;
}());
exports.BookTransaction = BookTransaction;
