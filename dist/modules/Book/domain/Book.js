"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name, copies, genre, author, image_url) {
        this.id = id;
        this.name = name;
        this.copies = copies;
        this.genre = genre;
        this.author = author;
        this.image_url = image_url;
    }
    Book.prototype.mapToPrimitive = function () {
        return {
            id: this.id.value,
            name: this.name.value,
            copies: this.copies.value,
            genre: this.genre.value,
            author: this.author.value,
            image_url: this.image_url.value,
        };
    };
    return Book;
}());
exports.Book = Book;
