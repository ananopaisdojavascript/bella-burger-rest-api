import Login from "../entity/login.entity";
import { ILoginRepositoryPort } from "../ports/loginRepositoryPort";

class LoginService {
  constructor(private loginRepoistory: ILoginRepositoryPort) {}

  async createLogin(login: Login): Promise<Login> {
    return await this.loginRepoistory.createLogin(login)
  }
}

export default LoginService;