import { Request, Response, NextFunction } from "express";

export const adaptRoute = <T, K extends keyof T>(
  controllerClass: T,
  method: K
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    /* @ts-ignore */
    return controllerClass[method](req, res, next);
  };
};
