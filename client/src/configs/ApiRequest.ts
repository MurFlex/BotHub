import axios from 'axios'
import store from '../store'
import { login, logout } from '../store/auth/authSlice'
import { refreshTokenThunk } from '../store/auth/authThunks'

const ApiRequest = axios.create({
    baseURL: '/api',
    timeout: 5000
})

ApiRequest.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
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
    async error => {
        const originalRequest = error.config

        if (
            error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
        ) {
            originalRequest._retry = true

            try {
                const accessToken = await store.dispatch(refreshTokenThunk()).unwrap()

                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
                return ApiRequest(originalRequest)
            } catch (err) {
                store.dispatch(logout())
                return Promise.reject(err)
            }
        }

        return Promise.reject(error)
    }
)

export default ApiRequest
