import Login from "../entity/login.entity";

export interface ILoginRepositoryPort {
  createLogin(login: Login): Promise<Login>
}