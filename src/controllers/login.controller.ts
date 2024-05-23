import { Request, Response, NextFunction } from 'express';
import Login from '../entity/login.entity';
import AppDataSource from '../database/data-source';
import Encrypt from '../helpers/encrypt';
import { logger } from '../app';

async function createLogin(request: Request, response: Response, next: NextFunction) {
  try {
    const { name, email, password, salon, kitchen } = request.body
    const encryptPassword = await Encrypt.passwordEncrypt(password)
    const user = await AppDataSource.getRepository(Login).save({
      name: name,
      email: email,
      password: encryptPassword,
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

export default {
  createLogin
}