"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTrasactionNameRender = void 0;
var BookTrasactionNameRender = /** @class */ (function () {
    function BookTrasactionNameRender(value) {
        this.value = value;
        this.validateNameRender();
    }
    BookTrasactionNameRender.prototype.validateNameRender = function () {
        if (!this.value) {
            throw new Error('BookTrasactionNameRender must be a valid string');
        }
    };
    return BookTrasactionNameRender;
}());
exports.BookTrasactionNameRender = BookTrasactionNameRender;
