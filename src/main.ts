import * as express from 'express';
import { ExpressBookRouter } from './modules/Book/infrastructure/ExpressBookRouter';
import syncDatabase from './modules/Shared/Database/DataBaseSync';
import { ExpressBookTransactionRouter } from './modules/BookTransaction/infrastructure/ExpressBookTransactionRouter';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();
app.use(express.json());

//Rutas
app.use(ExpressBookRouter)//--> Rutas de los libros
app.use(ExpressBookTransactionRouter)//--> Rutas de las transacciones de libros


app.use(errorMiddleware);

// Sincroniza la base de datos y luego inicia el servidor
syncDatabase().then(() => {
   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
 }).catch(error => {
   console.error('Failed to start server:', error);
 });