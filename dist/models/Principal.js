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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const events_routes_1 = __importDefault(require("../routes/events.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const login_routes_1 = __importDefault(require("../routes/login.routes"));
const config_1 = require("../database/config");
class Princpal {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.database();
    }
    middlewares() {
        this.app.use(express_1.default.static('public'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/events', events_routes_1.default);
        this.app.use('/users', users_routes_1.default);
        this.app.use('/auth', login_routes_1.default);
        this.app.get('*', (req, resp) => {
            resp.sendFile('index.html', { root: 'public' });
        });
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.connectDB)();
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`);
        });
    }
}
exports.default = Princpal;
//# sourceMappingURL=Principal.js.map