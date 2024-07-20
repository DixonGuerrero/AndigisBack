"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookName = void 0;
var BookName = /** @class */ (function () {
    function BookName(value) {
        this.value = value;
        this.ensureIsValid();
    }
    BookName.prototype.ensureIsValid = function () {
        if (this.value.length <= 3) {
            throw new Error('BookName must be greater than 3 characters');
        }
    };
    return BookName;
}());
exports.BookName = BookName;
