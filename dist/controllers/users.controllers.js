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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUsers = exports.getUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_1 = __importDefault(require("../models/Users"));
const createJWT_1 = require("../jwt/createJWT");
const createUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { name, email, password } = _a, rest = __rest(_a, ["name", "email", "password"]);
        const userExists = yield Users_1.default.findOne({ email });
        if (userExists) {
            return resp.status(400).json({
                ok: false,
                msg: 'User Exists'
            });
        }
        const user = new Users_1.default({ name, email, password });
        const salt = bcrypt_1.default.genSaltSync();
        user.password = bcrypt_1.default.hashSync(password, salt);
        yield user.save();
        const token = yield (0, createJWT_1.createJWT)(user._id.toString());
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.createUser = createUser;
const getUsers = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Users_1.default.find({ status: true });
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.getUsers = getUsers;
const getUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield Users_1.default.findById(id);
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.getUser = getUser;
const updateUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _b = req.body, { email, password, status } = _b, rest = __rest(_b, ["email", "password", "status"]);
        const { id } = req.params;
        if (password) {
            const salt = bcrypt_1.default.genSaltSync();
            rest.password = bcrypt_1.default.hashSync(password, salt);
        }
        const user = yield Users_1.default.findByIdAndUpdate(id, rest, { new: true });
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield Users_1.default.findByIdAndUpdate(id, { status: false }, { new: true });
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map