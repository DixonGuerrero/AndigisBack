"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCopies = void 0;
var BookCopies = /** @class */ (function () {
    function BookCopies(value) {
        this.value = value;
        this.ensureIsValid();
    }
    BookCopies.prototype.ensureIsValid = function () {
        if (this.value < 0) {
            throw new Error('BookCopies must be greater than or equal to 0');
        }
    };
    return BookCopies;
}());
exports.BookCopies = BookCopies;
