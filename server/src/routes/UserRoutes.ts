import { Request, Response, Router } from 'express'
import UserController from "../controllers/UserController/UserController";

const router = Router()

router.get('/user', UserController.getProfile)

export default router
