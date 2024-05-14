import * as winston from 'winston';

declare global {
  namespace NodeJS {
    interface Global {
      log: typeof winston.Logger;
    }
  } const log: winston.Logger;
}
