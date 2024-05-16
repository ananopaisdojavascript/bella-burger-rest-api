import User from "../entity/user.entity";

export interface IUserRepositoryPort {
  createUser(user: User): Promise<User>;
}