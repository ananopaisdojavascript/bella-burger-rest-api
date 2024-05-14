import { DataSource } from "typeorm";

import User  from "./entity/user.entity";

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'bella-burger-api',
  entities: [
    User
  ],
  synchronize: true,
  logging: true
})

export default dataSource;