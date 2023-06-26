"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const router = (0, express_1.Router)();
router.get('/', users_controllers_1.getUsers);
router.post('/', users_controllers_1.createUser);
router.get('/:id', users_controllers_1.getUser);
router.put('/:id', users_controllers_1.updateUser);
router.delete('/:id', users_controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map