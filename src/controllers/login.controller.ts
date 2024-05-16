import Login from "../entity/login.entity";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import { encrypt } from "../helpers/helpers";


const login = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email, password } = request.body
    if (!email ||!password) {
      return response
         .status(500)
         .json({ message: " email and password required" });
    }
    const userRepository = AppDataSource.getRepository(Login);
    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = encrypt.comparepassword(user.password, password);
    if (!isPasswordValid) {
      return response.status(404).json({ message: "User not found" });
    }
    const token = encrypt.generateToken({ id: user.id as number });

    return response.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    next(error);
  }
}

export default login;