"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Principal_1 = __importDefault(require("./models/Principal"));
dotenv_1.default.config();
const principal = new Principal_1.default();
principal.listen();
//# sourceMappingURL=index.js.map