import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ApiService from '../../service/ApiService/ApiService'
import { RootState } from '../../store'

const Login: FC = () => {
	const dispatch = useDispatch()

	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	)

	useEffect(() => {
		const loginUser = async () => {
			try {
				await ApiService.auth.login()
			} catch (error) {
				console.error('Login failed:', error)
			}
		}

		loginUser()
	}, [dispatch])

	if (isAuthenticated) {
		return <Navigate to='/cabinet' />
	}

	return <h1>{isAuthenticated ? 'true' : 'false'}</h1>
}

export default Login
