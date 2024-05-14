"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const winston_1 = __importDefault(require("winston"));
const app = (0, express_1.default)();
const { combine, timestamp, label, printf } = winston_1.default.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
exports.logger = winston_1.default.createLogger({
    level: 'silly',
    transports: [
        new (winston_1.default.transports.Console)(),
        new (winston_1.default.transports.File)({ filename: 'bella-burger-rest-api.log' })
    ],
    format: combine(label({ label: 'bella-burger-rest-api' }), timestamp(), myFormat),
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.use((error, request, response, _next) => {
    exports.logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
    response.status(400).send({
        error: error.message,
    });
});
exports.default = app;
