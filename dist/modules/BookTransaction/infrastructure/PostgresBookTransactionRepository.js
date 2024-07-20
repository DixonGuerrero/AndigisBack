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
exports.PostgresBookTransactionRepository = void 0;
var BookTransaction_1 = require("../domain/BookTransaction");
var BookTransactionDate_1 = require("../domain/BookTransactionDate");
var BookTransactionDocument_1 = require("../domain/BookTransactionDocument");
var BookTransactionId_1 = require("../domain/BookTransactionId");
var BookTransactionIdBook_1 = require("../domain/BookTransactionIdBook");
var BookTransactionType_1 = require("../domain/BookTransactionType");
var BookTrasactionNameRender_1 = require("../domain/BookTrasactionNameRender");
var BookTransactionModel_1 = require("./ModelPostgres/BookTransactionModel");
var PostgresBookTransactionRepository = /** @class */ (function () {
    function PostgresBookTransactionRepository() {
    }
    PostgresBookTransactionRepository.prototype.create = function (bookTransaction) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookTransactionModel_1.default.create({
                            id: bookTransaction.id.value,
                            id_book: bookTransaction.id_book.value,
                            type: bookTransaction.type.value,
                            date: bookTransaction.date.value,
                            document: bookTransaction.document.value,
                            name_render: bookTransaction.name_render.value
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgresBookTransactionRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var booksTransaction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookTransactionModel_1.default.findAll()];
                    case 1:
                        booksTransaction = _a.sent();
                        return [2 /*return*/, booksTransaction.map(function (bookTransaction) { return _this.mapBookToDomain(bookTransaction); })];
                }
            });
        });
    };
    PostgresBookTransactionRepository.prototype.getOneById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var bookTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookTransactionModel_1.default.findByPk(id.value)];
                    case 1:
                        bookTransaction = _a.sent();
                        if (!bookTransaction)
                            return [2 /*return*/, null];
                        return [2 /*return*/, this.mapBookToDomain(bookTransaction)];
                }
            });
        });
    };
    PostgresBookTransactionRepository.prototype.update = function (book) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookTransactionModel_1.default.update({
                            id_book: book.id_book.value,
                            type: book.type.value,
                            date: book.date.value,
                            document: book.document.value,
                            name_render: book.name_render.value
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
    PostgresBookTransactionRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookTransactionModel_1.default.destroy({
                            where: { id: id.value }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgresBookTransactionRepository.prototype.mapBookToDomain = function (book) {
        return new BookTransaction_1.BookTransaction(new BookTransactionId_1.BookTransactionId(book.id), new BookTransactionIdBook_1.BookTransactionIdBook(book.id_book), new BookTransactionType_1.BookTransactionType(book.type), new BookTransactionDate_1.BookTransactionDate(book.date), new BookTransactionDocument_1.BookTransactionDocument(book.document), new BookTrasactionNameRender_1.BookTrasactionNameRender(book.name_render));
    };
    return PostgresBookTransactionRepository;
}());
exports.PostgresBookTransactionRepository = PostgresBookTransactionRepository;
