import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import User from "./entity/user.entity"

dotenv.config()

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5433"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [User],
  synchronize: true,
  logging: true,
})