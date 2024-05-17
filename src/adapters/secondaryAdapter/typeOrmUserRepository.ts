import User from "../../core/entity/user.entity";
import { IUserRepositoryPort } from "../../core/ports/userRepositoryPort";
import AppDataSource from "../database/data-source";

class TypeOrmUserRepositoryPort implements IUserRepositoryPort {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(user: User): Promise<User> {
    const newUser = await this.userRepository.save(user)
    return newUser;
  }
}

export default TypeOrmUserRepositoryPort