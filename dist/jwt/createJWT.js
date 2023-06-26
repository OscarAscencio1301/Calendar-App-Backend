"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWT = (id) => {
    const payload = { id };
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, String(process.env.SECRET), {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.createJWT = createJWT;
//# sourceMappingURL=createJWT.js.map