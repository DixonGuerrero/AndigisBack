// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('andigis_test', 'dixon', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
