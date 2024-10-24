import { Request, Response, Router } from 'express'
import AuthController from '../controllers/AuthController/AuthController'
import {validationMiddleware} from "../middleware/validation.middleware";
import {authValidation, checkEmailValidation} from "../validation/authValidation";

const router = Router()

router.post('/login', validationMiddleware(authValidation), AuthController.login)

router.post('/register', validationMiddleware(authValidation), AuthController.register)

router.get('/check-email', validationMiddleware(checkEmailValidation), AuthController.checkEmailFree)

router.get('/refresh-token', AuthController.refreshToken)

export default router
