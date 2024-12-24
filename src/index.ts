import cors from 'cors';
import express, { Request, Response } from 'express';
import { logger } from './config/logger.js';
import { StatusCodes } from './enums/status-codes.js';
import { errorHandler } from './middlewares/error-handler.js';
import { notFound } from './middlewares/not-found.js';
import routes from './routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

const PORT = 8081;

app.get('/', (req: Request, res: Response) => {
  const successStatus = StatusCodes.OK;
  res.status(successStatus).send('Hello World');
});

app.listen(PORT, () => {
  logger.info(`Server listening at port ${PORT}`);
});
