declare global {
	namespace Express {
		interface Request {
			user?: IUser | null
		}
	}
}

export {}
