"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const winston_1 = __importDefault(require("winston"));
const data_source_1 = require("./data-source");
const user_route_1 = __importDefault(require("./routes/user.route"));
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    const { combine, timestamp, label, printf } = winston_1.default.format;
    const myFormat = printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level} : ${message}`;
    });
    const logger = winston_1.default.createLogger({
        level: "silly",
        transports: [
            new (winston_1.default.transports.Console)(),
            new (winston_1.default.transports.File)({ filename: "bella-burger.log" })
        ],
        format: combine(label({ label: "bella-burger" }), timestamp(), myFormat)
    });
    app.use(user_route_1.default);
    app.use((error, request, response) => {
        logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
        response.status(400).send({
            error: error.message,
        });
    });
    const port = 3000;
    app.listen(port, () => {
        try {
            logger.info(`Servidor rodando na porta ${port}`);
        }
        catch (error) {
            logger.error(error);
        }
    });
})
    .catch((error) => {
    console.log(error);
});
