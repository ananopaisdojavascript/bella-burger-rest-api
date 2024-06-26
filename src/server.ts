import dotenv from 'dotenv';
import AppDataSource from './database/data-source';
import app, { logger } from './app';
dotenv.config();

const port = 3000;

app.listen(port, async () => {
  try {
    await AppDataSource.initialize()
    logger.info(`Bella Burger API is running on port ${port}`);
  } catch (error) {
    logger.error(error)
  }
});
