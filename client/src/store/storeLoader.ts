import { login } from './authSlice'
import store from './index'

export const loadStore = () => {
	loadAuthStore()
}

const loadAuthStore = () => {
	const token = localStorage.getItem('accessToken')

	if (token) {
		store.dispatch(login(token))
	}
}
