import dotenv from 'dotenv';
import app, { logger } from './app';
import AppDataSource from './database/data-source';
dotenv.config();

AppDataSource.initialize()
  .then(() => {

    const port = 3000;

    app.listen(port, () => {
      try {
        logger.info(`Bella Burger API is running on port ${port}`);
      } catch (error) {
        logger.error(error)
      }
    });
  })
  .catch((error) => {
    console.log(error)
  })