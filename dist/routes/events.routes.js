"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_controllers_1 = require("../controllers/events.controllers");
const express_validator_1 = require("express-validator");
const verifyError_1 = require("../middlewares/verifyError");
const validateID_1 = require("../middlewares/validateID");
const verifyJWT_1 = __importDefault(require("../jwt/verifyJWT"));
const router = (0, express_1.Router)();
router.get('/', [
    verifyJWT_1.default,
], events_controllers_1.getEvents);
router.post('/', [
    verifyJWT_1.default,
    (0, express_validator_1.check)('start', 'The start date is required').isDate(),
    (0, express_validator_1.check)('end', 'The end date is required').isDate(),
    (0, express_validator_1.check)('title', 'The title is required').notEmpty(),
    verifyError_1.verifyError
], events_controllers_1.createEvent);
router.get('/:id', [
    verifyJWT_1.default,
    (0, express_validator_1.check)('id').custom(validateID_1.validateIdEvent),
    (0, express_validator_1.check)('id', 'The id is invalid').isMongoId(),
    verifyError_1.verifyError
], events_controllers_1.getEvent);
router.put('/:id', [
    verifyJWT_1.default,
    (0, express_validator_1.check)('id').custom(validateID_1.validateIdEvent),
    (0, express_validator_1.check)('id', 'The id is invalid').isMongoId(),
    verifyError_1.verifyError
], events_controllers_1.updateEvent);
router.delete('/:id', [
    verifyJWT_1.default,
    (0, express_validator_1.check)('id').custom(validateID_1.validateIdEvent),
    (0, express_validator_1.check)('id', 'The id is invalid').isMongoId(),
    verifyError_1.verifyError
], events_controllers_1.deleteEvent);
exports.default = router;
//# sourceMappingURL=events.routes.js.map