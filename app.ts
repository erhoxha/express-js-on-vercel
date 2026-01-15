import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { getCalculateLotSize, postCalculateLotSize } from './controllers/calculateLotSizeController';

dotenv.config();

const app: Express = express();

// Determine the correct base path
// In production (compiled): __dirname = 'dist', so we need '../views'
// In development (ts-node): __dirname = root, so we need 'views'
const isCompiled = __dirname.endsWith('dist');
const viewsPath = isCompiled ? path.join(__dirname, '../views') : path.join(__dirname, 'views');
const publicPath = isCompiled ? path.join(__dirname, '../public') : path.join(__dirname, 'public');

app.set('view engine', 'ejs');
app.set('views', viewsPath);
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.redirect('/calculateLotSize');
});

app.get('/calculateLotSize', getCalculateLotSize);

app.post('/calculateLotSize', postCalculateLotSize);

export default app;
