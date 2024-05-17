import { Request, Response } from "express";
import LoginService from "../../../core/services/loginService.service";
import Login from "../../../core/entity/login.entity";
import Encrypt from "../../helpers/encrypt";

class LoginController {
  constructor(private loginService: LoginService) {}

  async createLogin(request: Request, response: Response){
    const { email, password, salon, kitchen } = request.body;
    const encryptPassword = await Encrypt.passwordEncrypt(password)
    const login = await this.loginService.createLogin({
      email: email,
      password: encryptPassword,
      salon: salon,
      kitchen: kitchen
    } as Login)
    const token = await Encrypt.generateToken({ id: login.id })
    return response.status(200).json({
      login: login, token
    })
  }
}

export default LoginController;