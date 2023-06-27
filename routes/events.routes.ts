import { Router } from "express";
import { createEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/events.controllers";
import { check } from "express-validator";
import { verifyError } from "../middlewares/verifyError";
import { validateIdEvent } from "../middlewares/validateID";
import verifyJWT from "../jwt/verifyJWT";

const router = Router()


router.get('/', [
    verifyJWT,
], getEvents);

router.post('/', [
    verifyJWT,
    check('start', 'The start date is required').isDate(),
    check('end', 'The end date is required').isDate(),
    check('title', 'The title is required').notEmpty(),
    verifyError
], createEvent);

router.get('/:id', [
    verifyJWT,
    check('id').custom(validateIdEvent),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], getEvent);

router.put('/:id', [
    verifyJWT,
    check('id').custom(validateIdEvent),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], updateEvent);

router.delete('/:id', [
    verifyJWT,
    check('id').custom(validateIdEvent),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], deleteEvent);


export default router;