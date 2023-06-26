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
const Users_1 = __importDefault(require("../models/Users"));
const verifyJWT = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('jwt');
    if (!token)
        return resp.status(404).json({
            ok: false,
            msg: 'Error found token'
        });
    try {
        const { id } = jsonwebtoken_1.default.verify(token, String(process.env.SECRET));
        const user = yield Users_1.default.findById(id);
        if (!user) {
            resp.status(400).json({
                ok: false,
                msg: "Incorrect User"
            });
        }
        else if (user.status) {
            return resp.json({
                msg: 'Delete User'
            });
        }
        req.user = user;
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error token'
        });
    }
});
exports.default = verifyJWT;
//# sourceMappingURL=verifyJWT.js.map