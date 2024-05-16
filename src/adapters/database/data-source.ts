import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import User from '../../core/entity/user.entity';

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5433"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [User],
  synchronize: true,
  logging: false,
})

export default AppDataSource;