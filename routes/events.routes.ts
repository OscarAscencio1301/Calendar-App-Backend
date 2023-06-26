import { Router } from "express";
import { createEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/events.controllers";

const router = Router()


router.get('/', getEvents);
router.post('/', createEvent);
router.get('/:id', getEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);


export default router;