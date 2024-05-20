"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const winston_1 = __importDefault(require("winston"));
const user_route_1 = __importDefault(require("./adapters/http/routes/user.route"));
const login_route_1 = __importDefault(require("./adapters/http/routes/login.route"));
const product_route_1 = __importDefault(require("./adapters/http/routes/product.route"));
const app = (0, express_1.default)();
const { combine, timestamp, label, printf } = winston_1.default.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});
exports.logger = winston_1.default.createLogger({
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
app.use(user_route_1.default);
app.use(login_route_1.default);
app.use(product_route_1.default);
app.use((error, request, response, _next) => {
    exports.logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
    response.status(400).send({
        error: error.message,
    });
});
exports.default = app;
