import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.controllers";
import { verifyError } from "../middlewares/verifyError";
import { check } from "express-validator";
import { validateIdUser } from "../middlewares/validateID";
import verifyJWT from "../jwt/verifyJWT";

const router = Router()


router.get('/', [
    verifyJWT,
    verifyError
],getUsers);

router.post('/', [
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').notEmpty(),
    verifyError
], createUser);

router.get('/:id', [
    verifyJWT,
    check('id', 'The id is invalid').isMongoId(),
    check('id').custom(validateIdUser),
    verifyError
], getUser);

router.put('/:id', [
    verifyJWT,
    check('id', 'The id is invalid').isMongoId(),
    check('id').custom(validateIdUser),
    verifyError
], updateUser);

router.delete('/:id', [
    verifyJWT,
    check('id').custom(validateIdUser),
    check('id', 'The id is invalid').isMongoId(),
    verifyError
], deleteUser);


export default router;