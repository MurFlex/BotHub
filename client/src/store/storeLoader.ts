import { login } from './auth/authSlice'
import { refreshTokenThunk } from './auth/authThunks'
import store from './index'

export const loadStore = async () => {
	await loadAuthStore()
}

const loadAuthStore = async () => {
	const token = localStorage.getItem('accessToken')

	if (token) {
		store.dispatch(login(token))
	} else {
		await store.dispatch(refreshTokenThunk()).unwrap()
	}
}
