import dotenv from 'dotenv';
import AppDataSource from './database/data-source';
import app, { logger } from './app';
dotenv.config();

const port = process.env.PORT || 3000;

function server() {
  app.listen(port, async () => {
    try {
      await AppDataSource.initialize()
      logger.info(`Bella Burger API is running on port ${port}`);
    } catch (error) {
      logger.error(error)
    }
  });
}

server()

export default server;