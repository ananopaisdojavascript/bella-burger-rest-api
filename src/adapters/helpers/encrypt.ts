import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET = "" } = process.env;

interface payload {
  id: number;
}

class Encrypt {
  static async passwordEncrypt(password: string) {
    return bycrpt.hashSync(password, 10)
  }

  static async comparePassword(password: string, hash: string) {
    return bycrpt.compareSync(password, hash)
  }

  static async generateToken(payload: payload) {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1d'
    })
  }
}

export default Encrypt;