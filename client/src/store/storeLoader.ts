import { login } from './auth/authSlice'
import { refreshTokenThunk } from './auth/authThunks'
import store from './index'

export const loadStore = () => {
	loadAuthStore()
}

const loadAuthStore = async () => {
	const token = localStorage.getItem('accessToken')

	if (token) {
		store.dispatch(login(token))
	} else {
		try {
			await store.dispatch(refreshTokenThunk()).unwrap()
		} catch (error) {
			console.error('Failed to refresh token on startup:', error)
		}
	}
}
