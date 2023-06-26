"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controllers_1 = require("../controllers/login.controllers");
const express_validator_1 = require("express-validator");
const verifyError_1 = require("../middlewares/verifyError");
const router = (0, express_1.Router)();
router.get('/renew', [], login_controllers_1.renew);
router.post('/login', [
    (0, express_validator_1.check)('email', 'The email is required').isEmail(),
    (0, express_validator_1.check)('password', 'The password is required').notEmpty(),
    verifyError_1.verifyError
], login_controllers_1.login);
exports.default = router;
//# sourceMappingURL=login.routes.js.map