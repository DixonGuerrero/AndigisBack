"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTransactionDocument = void 0;
var BookTransactionDocument = /** @class */ (function () {
    function BookTransactionDocument(value) {
        this.value = value;
    }
    BookTransactionDocument.prototype.validateDocument = function () {
        if (!this.value) {
            throw new Error('BookTransactionDocument must be a valid string');
        }
    };
    return BookTransactionDocument;
}());
exports.BookTransactionDocument = BookTransactionDocument;
