import { Request, Response } from 'express';
import UserService from '../../../core/services/userService.service';
import User from '../../../core/entity/user.entity';
import Encrypt from '../../helpers/encrypt';

class UserController {
  constructor(private userService: UserService) {}

  async createUser(request: Request, response: Response) {
    const { name, email, confirm_email, password, salon, kitchen } = request.body;
    const encryptPassword = await Encrypt.passwordEncrypt(password);
    const newUser = await this.userService.createUser({
      name: name,
      email: email,
      confirm_email: confirm_email,
      password: encryptPassword,
      confirm_password: encryptPassword,
      salon: salon,
      kitchen: kitchen
    } as User)

    if (!newUser) {
      return response.status(400).json({
        message: "Esse usuário já existe!"
      })
    }
    const token = await Encrypt.generateToken({
      id: newUser.id
    })
    return response.status(200).json({
      user: newUser, token
    })
  }
}

export default UserController;