import { Request, Response, Router } from 'express'
import AuthController from '../controllers/AuthController/AuthController'
import { getTokenPair } from '../utils/token-generator'
import UserController from "../controllers/AuthController/UserController";

const router = Router()

router.get('/user', UserController.getProfile)

export default router
