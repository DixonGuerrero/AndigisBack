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
exports.ExpressBookTransactionController = void 0;
var ServiceContainer_1 = require("./Service/ServiceContainer");
var BookTransactionNotFoundError_1 = require("../domain/BookTransactionNotFoundError");
var ExpressBookTransactionController = /** @class */ (function () {
    function ExpressBookTransactionController() {
    }
    ExpressBookTransactionController.prototype.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var booksTransactions, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ServiceContainer_1.ServiceContainer.bookTransaction.getAll.run()];
                    case 1:
                        booksTransactions = _a.sent();
                        return [2 /*return*/, res.json(booksTransactions.map(function (bookTransaction) { return bookTransaction.mapToPrimitive(); })).status(200)];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExpressBookTransactionController.prototype.getOneById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var bookTransaction, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ServiceContainer_1.ServiceContainer.bookTransaction.getOneById.run(req.params.id)];
                    case 1:
                        bookTransaction = _a.sent();
                        return [2 /*return*/, res.json(bookTransaction.mapToPrimitive()).status(200)];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2 instanceof BookTransactionNotFoundError_1.BookTransactionNotFoundError) {
                            return [2 /*return*/, res.status(404).json({ message: error_2.message })];
                        }
                        next(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExpressBookTransactionController.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id_book, type, date, document_1, name_render, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, id_book = _a.id_book, type = _a.type, date = _a.date, document_1 = _a.document, name_render = _a.name_render;
                        return [4 /*yield*/, ServiceContainer_1.ServiceContainer.bookTransaction.create.run(id_book, type, date, document_1, name_render)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(201).send()];
                    case 2:
                        error_3 = _b.sent();
                        if (error_3 instanceof Error) {
                            return [2 /*return*/, res.status(400).json({ message: error_3.message })];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExpressBookTransactionController.prototype.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, id_book, type, date, document_2, name_render, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, id = _a.id, id_book = _a.id_book, type = _a.type, date = _a.date, document_2 = _a.document, name_render = _a.name_render;
                        return [4 /*yield*/, ServiceContainer_1.ServiceContainer.bookTransaction.update.run(id, id_book, type, date, document_2, name_render)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(204).send()];
                    case 2:
                        error_4 = _b.sent();
                        if (error_4 instanceof BookTransactionNotFoundError_1.BookTransactionNotFoundError) {
                            return [2 /*return*/, res.status(404).json({ message: error_4.message })];
                        }
                        next(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExpressBookTransactionController.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ServiceContainer_1.ServiceContainer.bookTransaction.delete.run(req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(204).send()];
                    case 2:
                        error_5 = _a.sent();
                        if (error_5 instanceof BookTransactionNotFoundError_1.BookTransactionNotFoundError) {
                            return [2 /*return*/, res.status(404).json({ message: error_5.message })];
                        }
                        next(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ExpressBookTransactionController;
}());
exports.ExpressBookTransactionController = ExpressBookTransactionController;
