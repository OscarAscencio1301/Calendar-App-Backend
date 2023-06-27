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
exports.renew = exports.login = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createJWT_1 = require("../jwt/createJWT");
const login = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield Users_1.default.findOne({ email });
        if (!user) {
            return resp.status(400).json({
                ok: false,
                msg: 'User dont Exists'
            });
        }
        if (!user.status) {
            return resp.status(400).json({
                ok: false,
                msg: 'User deactivate'
            });
        }
        const passwords = bcrypt_1.default.compareSync(password, String(user.password));
        if (!passwords) {
            return resp.status(400).json({
                ok: false,
                msg: 'Error credentials'
            });
        }
        const token = yield (0, createJWT_1.createJWT)(user._id.toString());
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user,
            token
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.login = login;
const renew = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const token = yield (0, createJWT_1.createJWT)(user._id.toString());
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user,
            token
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.renew = renew;
//# sourceMappingURL=login.controllers.js.map