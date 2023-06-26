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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUsers = exports.getUser = exports.createUser = void 0;
const createUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        resp.status(200).json({
            ok: true,
            msg: 'ok'
        });
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
});
exports.createUser = createUser;
const getUsers = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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