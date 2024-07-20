"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTransactionId = void 0;
var BookTransactionId = /** @class */ (function () {
    function BookTransactionId(value) {
        this.value = value;
        this.validateId();
    }
    BookTransactionId.prototype.validateId = function () {
        if (!this.value) {
            throw new Error('BookTransactionId must be a valid string');
        }
    };
    return BookTransactionId;
}());
exports.BookTransactionId = BookTransactionId;
