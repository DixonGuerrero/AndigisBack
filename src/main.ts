import * as express from 'express';
import { ExpressBookRouter } from './modules/Book/infrastructure/ExpressBookRouter';
import syncDatabase from './modules/Shared/Database/DataBaseSync';
import { ExpressBookTransactionRouter } from './modules/BookTransaction/infrastructure/ExpressBookTransactionRouter';
import errorMiddleware from './middleware/errorMiddleware';
import * as cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors())

//Rutas
app.use(ExpressBookRouter)//--> Rutas de los libros
app.use(ExpressBookTransactionRouter)//--> Rutas de las transacciones de libros


app.use(errorMiddleware);

if(!process.env.NODE_DOCKER_PORT) {
  throw new Error('Environment variables not found')
}

const port = parseInt(process.env.NODE_DOCKER_PORT) ?? 3000;

// Sincroniza la base de datos y luego inicia el servidor
syncDatabase().then(() => {
   app.listen(port, () => {
     console.log("Server is running on port", port);
   });
 }).catch(error => {
   console.error('Failed to start server:', error);
 });