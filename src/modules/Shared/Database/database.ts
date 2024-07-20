import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Load environment variables
config();


if(!process.env.POSTGRES_DB || !process.env.POSTGRES_USER || !process.env.POSTGRES_PASSWORD || !process.env.PORT_DOCKER_DB || !process.env.POSTGRES_HOST) {
  throw new Error('Environment variables not found')
}

const sequelize = new Sequelize(
  process.env.POSTGRES_DB, 
  process.env.POSTGRES_USER , 
  process.env.POSTGRES_PASSWORD, 
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.PORT_DOCKER_DB),
    logging: false,
  
  }
);



export default sequelize;
