import { DataSource } from "typeorm"
import User from "./entity/user.entity"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [User],
  synchronize: true,
  logging: true,
})