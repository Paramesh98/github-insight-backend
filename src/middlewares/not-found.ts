import { Request, Response } from 'express';
import { StatusCodes } from '../enums/status-codes.js';

export const notFound = (_req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    error: { message: 'Route not found' },
  });
};
