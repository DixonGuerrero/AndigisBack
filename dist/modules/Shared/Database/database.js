"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dotenv_1 = require("dotenv");
// Load environment variables
(0, dotenv_1.config)();
if (!process.env.POSTGRES_DB || !process.env.POSTGRES_USER || !process.env.POSTGRES_PASSWORD || !process.env.PORT_DOCKER_DB || !process.env.POSTGRES_HOST) {
    throw new Error('Environment variables not found');
}
var sequelize = new sequelize_1.Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.PORT_DOCKER_DB),
    logging: false,
});
exports.default = sequelize;
