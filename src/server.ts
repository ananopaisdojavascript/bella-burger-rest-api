import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import winston from 'winston';
import dotenv from 'dotenv';
import AppDataSource from './adapters/database/data-source';
import UserRouter from './adapters/http/routes/user.route';
import LoginRouter from './adapters/http/routes/login.route';

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    const app = express();
    const port = process.env.PORT || 3000;

    const { combine, timestamp, label, printf } = winston.format;

    const myFormat = printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level} : ${message}`
    })

    const logger = winston.createLogger({
      level: "silly",
      transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "bella-burger-api.log" })
      ],
      format: combine(
        label({ label: "bella-burger-api" }),
        timestamp(),
        myFormat
      )
    })

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(UserRouter)
    app.use(LoginRouter)

    app.use((error: { message: any; }, request: Request, response: Response, _next: NextFunction) => {
      logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
      response.status(400).send({
        error: error.message,
      });
    });

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