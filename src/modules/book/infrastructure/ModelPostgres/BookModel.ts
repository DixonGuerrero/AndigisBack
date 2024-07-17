import { DataTypes } from 'sequelize';

import sequelize from '../../../Shared/Database/database';

const BookModel = sequelize.define('Book', {
  id: {
    type: DataTypes.STRING, 
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  copies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'books',
  timestamps: false,
});

export default BookModel;
