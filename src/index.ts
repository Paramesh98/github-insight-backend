import cors from 'cors';
import express from 'express';
import { config } from './config/env.js';
import { logger } from './config/logger.js';
import { errorHandler } from './middlewares/error-handler.js';
import { notFound } from './middlewares/not-found.js';
import routes from './routes/user.routes.js';

export const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

export const server = app.listen(config.PORT, () => {
  logger.info(`Server listening at port ${config.PORT}, ${config}`);
});
