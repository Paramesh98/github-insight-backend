import { Request, Response } from 'express';
import { StatusCodes } from '../enums/status-codes.js';

export const errorHandler = (err: Error, _req: Request, res: Response) => {
  const status = StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(status).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
};
