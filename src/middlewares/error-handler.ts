import { Request, Response } from 'express';
import { logger } from '../config/logger.js';
import { StatusCodes } from '../enums/status-codes.js';

export const errorHandler = (err: Error, _req: Request, res: Response) => {
  const status = StatusCodes.INTERNAL_SERVER_ERROR;
  logger.error(err.message);
  res.status(status).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
};
