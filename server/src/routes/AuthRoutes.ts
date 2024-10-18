import { Request, Response, Router } from 'express'
import AuthController from '../controllers/AuthController/AuthController'
import { getTokenPair } from '../utils/token-generator'

const router = Router()

router.get('/getAccessToken', (req: Request, res: Response) => {
	const tokens = getTokenPair(1)

	res.setHeader('Authorization', `Bearer ${tokens.accessToken}`)

	res.json(true)
}) // Временный для теста

router.post('/login', AuthController.login)

router.post('/register', AuthController.register)

router.get('/check-email', AuthController.checkEmailFree)

router.get('/refresh-token', AuthController.refreshToken)

export default router
