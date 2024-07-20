"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTransactionType = void 0;
var BookTransactionType = /** @class */ (function () {
    function BookTransactionType(value) {
        this.value = value;
        this.validateType();
    }
    BookTransactionType.prototype.validateType = function () {
        if (!this.value) {
            throw new Error('BookTransactionType must be a valid string');
        }
        if (this.value !== 'loan' && this.value !== 'return') {
            throw new Error('BookTransactionType must be either "loan" or "return"');
        }
    };
    return BookTransactionType;
}());
exports.BookTransactionType = BookTransactionType;
