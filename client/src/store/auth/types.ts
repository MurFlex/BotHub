export interface User {
	id: number
	email: string
	name: string
}

export interface AuthState {
	isAuthenticated: boolean
	accessToken: string | null
	refreshTokenLoading: boolean
	user: User | null
}