import axios from 'axios'
import store from '../store'
import { login, logout } from '../store/authSlice'

const ApiRequest = axios.create({
	baseURL: '/api',
	timeout: 5000,
})

ApiRequest.interceptors.request.use(
	config => {
		const token = localStorage.getItem('accessToken')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

ApiRequest.interceptors.response.use(
	response => {
		const newToken = response.headers['authorization']

		if (newToken && newToken.startsWith('Bearer ')) {
			const accessToken = newToken.split(' ')[1]

			localStorage.setItem('accessToken', accessToken)

			store.dispatch(login(accessToken))
		}

		return response
	},
	error => {
		if (error.response && error.response.status === 401) {
			store.dispatch(logout())
		}

		return Promise.reject(error)
	}
)

export default ApiRequest
