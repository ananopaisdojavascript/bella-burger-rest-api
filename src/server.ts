import dotenv from 'dotenv';
import AppDataSource from './database/data-source';
import app, { logger } from './app';
dotenv.config();

AppDataSource;

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    try {
      logger.info(`Bella Burger API is running on port ${port}`);
    } catch (error) {
      logger.error(error)
    }
  });

