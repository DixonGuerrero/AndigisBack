"use strict";
// src/modules/book_transactions/infrastructure/bookTransactionModel.js
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = require("../../../Shared/Database/database");
var BookModel_1 = require("../../../Book/infrastructure/ModelPostgres/BookModel");
var BookTransactionModel = database_1.default.define('book_transaction', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    id_book: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: BookModel_1.default,
            key: 'id',
        },
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    document: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name_render: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'book_transactions',
    timestamps: false,
});
BookTransactionModel.belongsTo(BookModel_1.default, {
    foreignKey: 'id_book',
    as: 'book',
});
exports.default = BookTransactionModel;
