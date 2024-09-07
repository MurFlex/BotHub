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
			const { email, password } = req.body

			const user = await UserModel.getUserByEmail(email)

			if (!user) {
				this.sendError(res, 'User not found')
				return
			}

			const isPasswordValid = await bcrypt.compare(password, user.password)

			if (!isPasswordValid) {
				this.sendError(res, 'Password is invalid')
				return
			}

			const tokens = getTokenPair(user.id)

			await UserModel.updateUser({
				...user,
				refresh_token: tokens.refreshToken,
			})

			res.cookie('access_token', tokens.accessToken, {
				// TODO: Вынести в utils
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 1000, // 60 минут
			})

			res.cookie('refresh_token', tokens.refreshToken, {
				// TODO: Вынести в utils
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
			})

			this.sendSuccess(res, { message: 'Success' })
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

			res.cookie('access_token', tokens.accessToken, {
				// TODO: Вынести в utils
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 1000, // 60 минут
			})

			res.cookie('refresh_token', tokens.refreshToken, {
				// TODO: Вынести в utils
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
			})

			this.sendSuccess(res, { ...user, access_token: tokens.accessToken })
		}
	)
}

export default new AuthController()
