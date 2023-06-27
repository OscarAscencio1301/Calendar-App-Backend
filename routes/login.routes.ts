import { Router } from "express";
import { login, renew } from "../controllers/login.controllers";
import { check } from "express-validator";
import { verifyError } from "../middlewares/verifyError";
import verifyJWT from "../jwt/verifyJWT";

const router = Router()


router.get('/renew', [
    verifyJWT,
    verifyError
], renew);
router.post('/login', [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').notEmpty(),
    verifyError
], login);


export default router;