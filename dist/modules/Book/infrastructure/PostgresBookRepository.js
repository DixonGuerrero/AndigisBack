"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresBookRepository = void 0;
var BookId_1 = require("../domain/BookId");
var BookName_1 = require("../domain/BookName");
var BookCopies_1 = require("../domain/BookCopies");
var BookGenre_1 = require("../domain/BookGenre");
var BookImageUrl_1 = require("../domain/BookImageUrl");
var BookAuthor_1 = require("../domain/BookAuthor");
var Book_1 = require("../domain/Book");
var BookModel_1 = require("./ModelPostgres/BookModel");
var PostgresBookRepository = /** @class */ (function () {
    function PostgresBookRepository() {
    }
    PostgresBookRepository.prototype.create = function (book) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel_1.default.create({
                            id: book.id.value,
                            name: book.name.value,
                            copies: book.copies.value,
                            genre: book.genre.value,
                            author: book.author.value,
                            image_url: book.image_url.value,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgresBookRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var books;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel_1.default.findAll()];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, books.map(function (book) { return _this.mapBookToDomain(book); })];
                }
            });
        });
    };
    PostgresBookRepository.prototype.getOneById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel_1.default.findByPk(id.value)];
                    case 1:
                        book = _a.sent();
                        if (!book)
                            return [2 /*return*/, null];
                        return [2 /*return*/, this.mapBookToDomain(book)];
                }
            });
        });
    };
    PostgresBookRepository.prototype.update = function (book) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel_1.default.update({
                            name: book.name.value,
                            copies: book.copies.value,
                            genre: book.genre.value,
                            image_url: book.image_url.value,
                        }, {
                            where: { id: book.id.value }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgresBookRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel_1.default.destroy({
                            where: { id: id.value }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgresBookRepository.prototype.mapBookToDomain = function (book) {
        return new Book_1.Book(new BookId_1.BookId(book.id), new BookName_1.BookName(book.name), new BookCopies_1.BookCopies(book.copies), new BookGenre_1.BookGenre(book.genre), new BookAuthor_1.BookAuthor(book.author), new BookImageUrl_1.BookImageUrl(book.image_url));
    };
    return PostgresBookRepository;
}());
exports.PostgresBookRepository = PostgresBookRepository;
