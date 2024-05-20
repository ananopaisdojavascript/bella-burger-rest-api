"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Middleware {
    static verifyToken(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const header = request.headers.authorization;
            if (!header) {
                return response.status(401).json({
                    message: "Não autorizado!"
                });
            }
            const token = header.split("")[1];
            if (!token) {
                return response.status(401).json({
                    message: "Não autorizado!"
                });
            }
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "");
            if (!decoded) {
                return response.status(401).json({
                    message: "Não autorizado!"
                });
            }
            //@ts-expect-error
            request["currentUser"] = decoded;
            next();
        });
    }
    static errorHandler(error, request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error(`Error: ${error.message}`);
            return response.status(500).json({ message: "Internal server error" });
        });
    }
}
exports.default = Middleware;
