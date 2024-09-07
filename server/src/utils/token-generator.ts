import jwt, { JwtPayload } from 'jsonwebtoken'

export interface TokenPayload extends JwtPayload {
	userId: Number
}

// TODO: Нужно эти длительности вывести куда-то в общее место с AuthController, в cookie приходится передавать число, а в JWT генератор строку, нужно подумать, как свести это к одному способу взаимодействия, возможно сделать функцию, которая примет TokenValidityTypes и вернет сумму, мб сделать парсер строки
export enum TokenValidityTypes {
	RefreshToken = '30d',
	AccessToken = '1h',
}

const getSecret = (): string => {
	const secret = process.env.SECRET_KEY

	if (!secret) {
		throw new Error('Secret must be defined')
	}

	return secret
}

const generateToken = (
	payload: TokenPayload,
	tokenExpires: TokenValidityTypes
): string => {
	const secret = getSecret()

	return jwt.sign(payload, secret, { expiresIn: tokenExpires })
}

export const getTokenPair = (userId: Number) => {
	const refreshToken = generateToken(
		{ userId },
		TokenValidityTypes.RefreshToken
	)
	const accessToken = generateToken({ userId }, TokenValidityTypes.AccessToken)

	return {
		refreshToken,
		accessToken,
	}
}

export const verifyToken = (token: string): JwtPayload | string => {
	const secret = getSecret()

	try {
		return jwt.verify(token, secret)
	} catch (error) {
		throw new Error('Invalid token')
	}
}
