import { Request, Response, Router } from 'express'
import AuthController from '../controllers/AuthController/AuthController'
import { getTokenPair } from '../utils/token-generator'

const router = Router()

router.post('/login', AuthController.login)

router.post('/register', AuthController.register)

router.get('/check-email', AuthController.checkEmailFree)

router.get('/refresh-token', AuthController.refreshToken)

export default router
