// src/middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log('Error middleware');

  if (err instanceof Error) {
    return res.status(500).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorMiddleware;
