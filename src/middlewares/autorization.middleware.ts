import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User  from "../entity/user.entity";

export const authorization = (roles: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { id: req.currentUser.id },
    });
    console.log(user);
    if (user &&!roles.includes(user.id)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};