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
exports.validateIdEvent = exports.validateIdUser = void 0;
const Events_1 = __importDefault(require("../models/Events"));
const Users_1 = __importDefault(require("../models/Users"));
const validateIdUser = (id = '') => __awaiter(void 0, void 0, void 0, function* () {
    const validar = yield Users_1.default.findById(id);
    if (!validar) {
        throw new Error('The id is incorrect');
    }
});
exports.validateIdUser = validateIdUser;
const validateIdEvent = (id = '') => __awaiter(void 0, void 0, void 0, function* () {
    const validar = yield Events_1.default.findById(id);
    if (!validar) {
        throw new Error('The id is incorrect');
    }
});
exports.validateIdEvent = validateIdEvent;
//# sourceMappingURL=validateID.js.map