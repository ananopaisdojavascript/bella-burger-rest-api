import "reflect-metadata"
import express, { Request, Response } from 'express';
import cors from 'cors';
import winston from "winston";
import { AppDataSource } from './data-source';
import UserRouter from './routes/user.route';

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    const { combine, timestamp, label, printf } = winston.format;

    const myFormat = printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level} : ${message}`
    })

    const logger = winston.createLogger({
      level: "silly",
      transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "bella-burger.log" })
      ],
      format: combine(
        label({ label: "bella-burger" }),
        timestamp(),
        myFormat
      )
    })

    app.use(UserRouter)

    app.use((error: { message: any; }, request: Request, response: Response) => {
      logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
      response.status(400).send({
        error: error.message,
      });
    });

    const port = 3000;

    app.listen(port, () => {
      try {
        logger.info(`Servidor rodando na porta ${port}`)
      } catch (error) {
        logger.error(error)
      }
    });
  })
  .catch((error) => {
    console.log(error);
  })

