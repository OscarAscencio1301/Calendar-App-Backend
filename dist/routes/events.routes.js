"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_controllers_1 = require("../controllers/events.controllers");
const router = (0, express_1.Router)();
router.get('/', events_controllers_1.getEvents);
router.post('/', events_controllers_1.createEvent);
router.get('/:id', events_controllers_1.getEvent);
router.put('/:id', events_controllers_1.updateEvent);
router.delete('/:id', events_controllers_1.deleteEvent);
exports.default = router;
//# sourceMappingURL=events.routes.js.map