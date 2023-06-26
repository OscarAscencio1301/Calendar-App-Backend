import { Router } from "express";
import { login, renew } from "../controllers/login.controllers";

const router = Router()


router.get('/renew', renew);
router.post('/login', login);


export default router;