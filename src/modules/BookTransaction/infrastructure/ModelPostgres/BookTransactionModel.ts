// src/modules/book_transactions/infrastructure/bookTransactionModel.js

import { DataTypes } from 'sequelize';
import sequelize from '../../../Shared/Database/database';
import BookModel from '../../../Book/infrastructure/ModelPostgres/BookModel';

const BookTransactionModel = sequelize.define('book_transaction', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  id_book: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: BookModel,
      key: 'id',
    },
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE ,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name_render: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'book_transactions',
  timestamps: false,
});

BookTransactionModel.belongsTo(BookModel, {
  foreignKey: 'id_book',
  as: 'book',
});

export default BookTransactionModel;
