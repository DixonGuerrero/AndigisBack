"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ExpressBookRouter_1 = require("./modules/Book/infrastructure/ExpressBookRouter");
var DataBaseSync_1 = require("./modules/Shared/Database/DataBaseSync");
var ExpressBookTransactionRouter_1 = require("./modules/BookTransaction/infrastructure/ExpressBookTransactionRouter");
var errorMiddleware_1 = require("./middleware/errorMiddleware");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());
//Rutas
app.use(ExpressBookRouter_1.ExpressBookRouter); //--> Rutas de los libros
app.use(ExpressBookTransactionRouter_1.ExpressBookTransactionRouter); //--> Rutas de las transacciones de libros
app.use(errorMiddleware_1.default);
if (!process.env.NODE_DOCKER_PORT) {
    throw new Error('Environment variables not found');
}
var port = (_a = parseInt(process.env.NODE_DOCKER_PORT)) !== null && _a !== void 0 ? _a : 3000;
// Sincroniza la base de datos y luego inicia el servidor
(0, DataBaseSync_1.default)().then(function () {
    app.listen(port, function () {
        console.log("Server is running on port", port);
    });
}).catch(function (error) {
    console.error('Failed to start server:', error);
});
