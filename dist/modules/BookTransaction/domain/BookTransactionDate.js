"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTransactionDate = void 0;
var BookTransactionDate = /** @class */ (function () {
    function BookTransactionDate(value) {
        if (typeof value === 'string') {
            var parsedDate = new Date(value);
            if (isNaN(parsedDate.getTime())) {
                throw new Error('Invalid date format. Date must be in YYYY-MM-DD format.');
            }
            this.value = parsedDate;
        }
        else if (value instanceof Date) {
            this.value = value;
        }
        else {
            throw new Error('Invalid date type. Expected Date or string.');
        }
    }
    BookTransactionDate.prototype.toString = function () {
        return this.value.toISOString().split('T')[0];
    };
    return BookTransactionDate;
}());
exports.BookTransactionDate = BookTransactionDate;
