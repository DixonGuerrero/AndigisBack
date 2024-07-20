"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookId = void 0;
var BookId = /** @class */ (function () {
    function BookId(value) {
        this.value = value;
        this.ensureIsValid();
    }
    BookId.prototype.ensureIsValid = function () {
        this.value = this.value.toString();
        if (this.value.length < 8) {
            throw new Error('BookId must be greater than 8 characters');
        }
    };
    return BookId;
}());
exports.BookId = BookId;
