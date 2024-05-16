import User from "../entity/user.entity";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";

const getUsers = async (_request: Request, response: Response, next: NextFunction) => {
  try {
    await AppDataSource.getRepository(User).find().then(users => {
      response.status(200).send(users);
    });
  } catch (error) {
    next(error);
  }
}

export default {
  getUsers
}