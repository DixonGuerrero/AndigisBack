"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookGenre = void 0;
var BookGenre = /** @class */ (function () {
    function BookGenre(value) {
        this.value = value;
        this.ensureIsValid();
    }
    BookGenre.prototype.ensureIsValid = function () {
        if (this.value.length <= 3) {
            throw new Error('BookGenre must be greater than 3 characters');
        }
    };
    return BookGenre;
}());
exports.BookGenre = BookGenre;
