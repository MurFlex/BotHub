import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import UserModel from '../../models/UserModel'
import { getTokenPair } from '../../utils/token-generator'
import { AbstractController } from '../AbstractController'

const SALT_ROUNDS = 10 // TODO: Вывести в какой-нибудь конфиг

class AuthController extends AbstractController {
	public login = asyncHandler(
		async (req: Request, res: Response): Promise<void> => {
			bcrypt
				.compare(
					'test',
					'$2b$10$VxEWBFo5Q7Isj1J930BalOPu6/yFbLrXws7TIrkdoqyoj6sHptew2' // encrypted 'test'
				)
				.then(result => {
					if (result) {
						this.sendSuccess(res, { result: 'good' })
					} else {
						this.sendError(res, 'Password is incorrect')
					}
				})
		}
	)

	public register = asyncHandler(
		async (req: Request, res: Response): Promise<void> => {
			const { name, email, password } = req.body

			const isHaveUser = await UserModel.getUserByEmail(email)

			if (isHaveUser) {
				res.status(400)
				throw new Error(`Пользователь с почтой ${email} уже существует`)
			}

			const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

			let user = await UserModel.createUser({
				name,
				email,
				password: hashedPassword,
			})

			const tokens = getTokenPair(user.id)

			user = await UserModel.updateUser({
				...user,
				refresh_token: tokens.refreshToken,
			})

			this.sendSuccess(res, { ...user, access_token: tokens.accessToken })
		}
	)
}

export default new AuthController()
