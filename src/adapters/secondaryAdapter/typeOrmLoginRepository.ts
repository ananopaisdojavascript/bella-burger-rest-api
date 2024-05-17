import Login from "../../core/entity/login.entity";
import { ILoginRepositoryPort } from "../../core/ports/loginRepositoryPort";
import AppDataSource from "../database/data-source";

class TypeOrmLoginRepositoryPort implements ILoginRepositoryPort {
  private loginRepository = AppDataSource.getRepository(Login)
  async createLogin(login: Login): Promise<Login> {
    const log = await this.loginRepository.save(login)
    return log
  }
}

export default TypeOrmLoginRepositoryPort;