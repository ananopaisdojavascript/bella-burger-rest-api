import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

class Middleware {
  static async verifyToken(request: Request, response: Response, next: NextFunction) {
    const header = request.headers.authorization

    if (!header) {
      return response.status(401).json({
        message: "Não autorizado!"
      })
    }

    const token = header.split("")[1]

    if (!token) {
      return response.status(401).json({
        message: "Não autorizado!"
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "")

    if (!decoded) {
      return response.status(401).json({
        message: "Não autorizado!"
      })
    }
    //@ts-expect-error
    request["currentUser"] = decoded;

    next()
  }

  static async errorHandler(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    console.error(`Error: ${error.message}`);
    return response.status(500).json({ message: "Internal server error" });
  }
}

export default Middleware;