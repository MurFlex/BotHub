import axios from 'axios'
import { useState } from 'react'
import ApiService from '../../../../service/ApiService/ApiService'

const useLogin = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const login = async (email: string, password: string) => {
		setLoading(true)
		setError(null)

		try {
			const response = await ApiService.auth.login(email, password)

			const { token } = response.data
			localStorage.setItem('accessToken', token)
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				if (e.response) {
					setError(e.response.data.message || 'Ошибка авторизации')
				} else if (e.request) {
					setError('Нет ответа от сервера')
				} else {
					setError(e.message)
				}
			} else {
				setError('Неизвестная ошибка')
			}
		} finally {
			setLoading(false)
		}
	}

	return { login, loading, error }
}

export default useLogin
