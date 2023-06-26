"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyError = void 0;
const express_validator_1 = require("express-validator");
const verifyError = (req, resp, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return resp.status(401).json(errors);
    }
    next();
};
exports.verifyError = verifyError;
//# sourceMappingURL=verifyError.js.map