import { NextFunction, Request, Response } from "express";
import jwtDecode from "jwt-decode";

export const adaptMiddleware = (permissionProfile: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const [_, token] = req.headers?.authorization.split(" ");
    if (token) {
      const { profile } = jwtDecode<{ profile: string; id: number }>(token);
      if (permissionProfile.includes(profile)) {
        next();
      } else {
        res.status(403).json({ message: "Forbidden" });
      }
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};
