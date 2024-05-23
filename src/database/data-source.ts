import "reflect-metadata";
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import Users from "../entity/user.entity";
import Login from "../entity/login.entity";
import Products from "../entity/product.entity";
import Orders from "../entity/order.entity";

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5433"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Users, Login, Products, Orders],
  synchronize: true,
  logging: true,
})

export default AppDataSource;