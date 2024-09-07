import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel'
import { TokenPayload } from '../utils/token-generator'

export const auth = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const token = req.headers.authorization?.split(' ')[1]
		const secret = process.env.SECRET_KEY

		if (!secret) {
			throw new Error('Secret must be defined')
		}

		if (!token) {
			res.status(401)
			throw new Error('Необходима авторизация')
		}

		const decodedToken = jwt.verify(token, secret) as TokenPayload

		const user = UserModel.getUserById(decodedToken.userId)

		if (user) {
			req.user = user
			next()
		}
	}
)
