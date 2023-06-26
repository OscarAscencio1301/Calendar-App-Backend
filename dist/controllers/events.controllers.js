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
exports.updateEvent = exports.deleteEvent = exports.getEvents = exports.getEvent = exports.createEvent = void 0;
const createEvent = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.createEvent = createEvent;
const getEvents = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.getEvents = getEvents;
const getEvent = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.getEvent = getEvent;
const updateEvent = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.updateEvent = updateEvent;
const deleteEvent = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.deleteEvent = deleteEvent;
//# sourceMappingURL=events.controllers.js.map