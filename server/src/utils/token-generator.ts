import jwt, { JwtPayload } from 'jsonwebtoken'

const SECRET_KEY = 'your-secret-key'

interface TokenPayload {
	userId: Number
}

export enum TokenValidityTypes {
	RefreshToken = '7d',
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
