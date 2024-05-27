import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import winston from 'winston';
import UserRouter from './routes/user.route';
import LoginRouter from './routes/login.route';
import ProductRouter from './routes/product.route';
import OrderRouter from './routes/order.route';
import timeout from 'connect-timeout';

const app = express();

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} : ${message}`
})

export const logger = winston.createLogger({
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
app.use(timeout(300000))

app.use(UserRouter)
app.use(LoginRouter)
app.use(ProductRouter)
app.use(OrderRouter)

app.use((error: { message: any; }, request: Request, response: Response, _next: NextFunction) => {
  logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  response.status(400).send({
    error: error.message,
  });
});

export default app;