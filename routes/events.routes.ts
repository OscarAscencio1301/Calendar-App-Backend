import { Router } from "express";
import { createEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/events.controllers";
import { check } from "express-validator";
import { verifyError } from "../middlewares/verifyError";
import { validateIdEvent } from "../middlewares/validateID";

const router = Router()


router.get('/', getEvents);

router.post('/', [
    check('start', 'The start date is required').isDate(),
    check('end', 'The end date is required').isDate(),
    check('title', 'The title is required').notEmpty(),
    verifyError
], createEvent);

router.get('/:id', [
    check('id').custom(validateIdEvent),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], getEvent);

router.put('/:id', [
    check('id').custom(validateIdEvent),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], updateEvent);

router.delete('/:id', [
    check('id').custom(validateIdEvent),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], deleteEvent);


export default router;