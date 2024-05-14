import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import winston from 'winston';

const app = express();

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = winston.createLogger({
  level: 'silly',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'bella-burger-rest-api.log' })
  ],
  format: combine(
    label({ label: 'bella-burger-rest-api' }),
    timestamp(),
    myFormat
  ),
})

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use((error: { message: any; }, request: Request, response: Response, _next: NextFunction) => {
  logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  response.status(400).send({
    error: error.message,
  });
});
export default app;