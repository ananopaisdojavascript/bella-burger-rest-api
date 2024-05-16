import User from "../entity/user.entity";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";

const createUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    await AppDataSource.getRepository(User).save(request.body);
    response.status(201).send(request.body);
  } catch (error) {
    next(error);
  }
}

const getUsers = async (_request: Request, response: Response, next: NextFunction) => {
  try {
    await AppDataSource.getRepository(User).find().then(users => {
      response.status(200).send(users);
    });
  } catch (error) {
    next(error);
  }
}

const getUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    await AppDataSource.getRepository(User).findOneBy({
      id: request.params.id
    })
      .then(user => {
        response.status(200).send(user);
      });
  } catch (error) {
    next(error);
  }
}

const updateUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const user = await AppDataSource.getRepository(User).findOneBy({
      id: request.params.id,
    });
    if (user) {
      AppDataSource.getRepository(User).merge(user, request.body);
      const results = await AppDataSource.getRepository(User).save(user);
      return response.send(results);
    } else {
      return response.status(404).send("User not found");
    }
  } catch (error) {
    next(error);
  }
}

const deleteUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const result = await AppDataSource.getRepository(User).delete(request.params.id)
    return response.send(result)
  } catch (error) {
    next(error);
  }
}

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
}