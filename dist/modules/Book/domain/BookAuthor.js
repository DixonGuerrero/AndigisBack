"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthor = void 0;
var BookAuthor = /** @class */ (function () {
    function BookAuthor(value) {
        this.value = value;
        this.ensureIsValid();
    }
    BookAuthor.prototype.ensureIsValid = function () {
        this.value = this.value.toString();
        if (this.value.length < 1) {
            throw new Error('BookAuthor is very short');
        }
    };
    return BookAuthor;
}());
exports.BookAuthor = BookAuthor;
