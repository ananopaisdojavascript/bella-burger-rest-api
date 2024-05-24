import { Request, Response, NextFunction } from 'express';
import Users from '../entity/user.entity';
import AppDataSource from '../database/data-source';
import Encrypt from '../helpers/encrypt';
import { logger } from '../app';

async function getUsers(_request: Request, response: Response, next: NextFunction) {
  try {
    const users = await AppDataSource.getRepository(Users).find()
    logger.info('GET /users')
    return response.json(users)
  } catch (error) {
    next(error)
  }
}

async function getUser(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const user = await AppDataSource.getRepository(Users).findOneBy({ id: parseInt(id) })
    logger.info('GET /user/:id')
    response.status(200).send(user)
  } catch (error) {
    next(error)
  }
}

async function createUser(request: Request, response: Response, next: NextFunction) {
  try {
    const { name, email, confirm_email, password, confirm_password, salon, kitchen } = request.body
    const encryptPassword = await Encrypt.passwordEncrypt(password)
    const user = await AppDataSource.getRepository(Users).save({
      name: name,
      email: email,
      confirm_email: confirm_email,
      password: encryptPassword,
      confirm_password: encryptPassword,
      salon: salon,
      kitchen: kitchen
    })

    if (!user) {
      return response.status(400).json({ message: "Esse usuário já existe!" });
    }

    const token = await Encrypt.generateToken({ id: user.id })
    logger.info(`POST /users - ${JSON.stringify(user)}`);
    return response.status(200).json({ user: user, token })
  } catch (error) {
    next(error)
  }

}

async function deleteUser(request: Request, response: Response, next: NextFunction) {
  try {
    const results = await AppDataSource.getRepository(Users).delete(request.params.id)
    return response.send(results)
  } catch (error) {
    next(error)
  }
}

export default {
  getUsers,
  createUser,
  getUser,
  deleteUser
}
