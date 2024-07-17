// src/config/syncDatabase.js
import sequelize from './database';
import BookModel from '../../Book/infrastructure/ModelPostgres/BookModel';
import BookTransactionModel from '../../BookTransaction/infrastructure/ModelPostgres/BookTransactionModel';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
};

export default syncDatabase;
