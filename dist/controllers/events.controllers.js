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
exports.updateEvent = exports.deleteEvent = exports.getEvents = exports.getEvent = exports.createEvent = void 0;
const Events_1 = __importDefault(require("../models/Events"));
const createEvent = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { start, end, title, desc, status } = req.body;
        const user = req.user;
        const payload = {
            start,
            end,
            title,
            desc,
            user: user === null || user === void 0 ? void 0 : user._id
        };
        const event = new Events_1.default(payload);
        yield event.save();
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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
exports.createEvent = createEvent;
const getEvents = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield Events_1.default.find({ status: true });
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            events
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
        const { id } = req.params;
        const event = yield Events_1.default.findById(id);
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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
        const { start, end, title, desc, status } = req.body;
        const { id } = req.params;
        const event = yield Events_1.default.findByIdAndUpdate(id, { start, end, title, desc }, { new: true });
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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
        const { id } = req.params;
        const event = yield Events_1.default.findByIdAndUpdate(id, { status: false }, { new: true });
        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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