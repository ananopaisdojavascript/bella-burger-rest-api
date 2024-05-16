import User from "../entity/user.entity";
import { IUserRepositoryPort } from "../ports/userRepositoryPort";

class UserService {
  constructor(private readonly userRepository: IUserRepositoryPort) {}

  async createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }
}

export default UserService;