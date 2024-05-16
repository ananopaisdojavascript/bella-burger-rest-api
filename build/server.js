"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const winston_1 = __importDefault(require("winston"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = __importDefault(require("./adapters/database/data-source"));
dotenv_1.default.config();
data_source_1.default.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 3000;
    const { combine, timestamp, label, printf } = winston_1.default.format;
    const myFormat = printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level} : ${message}`;
    });
    const logger = winston_1.default.createLogger({
        level: "silly",
        transports: [
            new (winston_1.default.transports.Console)(),
            new (winston_1.default.transports.File)({ filename: "bella-burger-api.log" })
        ],
        format: combine(label({ label: "bella-burger-api" }), timestamp(), myFormat)
    });
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.get("/", (_request, response) => {
        response.status(200).json({
            message: "Welcome to Bella Burger API"
        });
    });
    app.use((error, request, response, _next) => {
        logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
        response.status(400).send({
            error: error.message,
        });
    });
    app.listen(port, () => {
        try {
            logger.info(`Bella Burger API is running on port ${port}`);
        }
        catch (error) {
            logger.error(error);
        }
    });
})
    .catch((error) => {
    console.log(error);
});
