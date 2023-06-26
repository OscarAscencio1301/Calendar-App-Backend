"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const verifyError_1 = require("../middlewares/verifyError");
const express_validator_1 = require("express-validator");
const validateID_1 = require("../middlewares/validateID");
const router = (0, express_1.Router)();
router.get('/', users_controllers_1.getUsers);
router.post('/', [
    (0, express_validator_1.check)('name', 'The name is required').notEmpty(),
    (0, express_validator_1.check)('email', 'The email is required').isEmail(),
    (0, express_validator_1.check)('password', 'The password is required').notEmpty(),
    verifyError_1.verifyError
], users_controllers_1.createUser);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'The id is invalid').isMongoId(),
    (0, express_validator_1.check)('id').custom(validateID_1.validateIdUser),
    verifyError_1.verifyError
], users_controllers_1.getUser);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'The id is invalid').isMongoId(),
    (0, express_validator_1.check)('id').custom(validateID_1.validateIdUser),
    verifyError_1.verifyError
], users_controllers_1.updateUser);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(validateID_1.validateIdUser),
    (0, express_validator_1.check)('id', 'The id is invalid').isMongoId(),
    verifyError_1.verifyError
], users_controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map