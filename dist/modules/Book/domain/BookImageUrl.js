"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookImageUrl = void 0;
var BookImageUrl = /** @class */ (function () {
    function BookImageUrl(value) {
        this.value = value;
        this.ensureIsValid();
        this.validateImageUrl();
    }
    BookImageUrl.prototype.ensureIsValid = function () {
        if (this.value.length <= 3) {
            throw new Error('BookImageUrl must be greater than 3 characters');
        }
    };
    BookImageUrl.prototype.validateImageUrl = function () {
        var url = new URL(this.value);
        if (!url.protocol.startsWith('http')) {
            console.log(url.protocol, 'llego hasta aca a validar la image');
            throw new Error('BookImageUrl must be a valid URL');
        }
    };
    return BookImageUrl;
}());
exports.BookImageUrl = BookImageUrl;
