import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store'

interface PrivateRouteProps {
	children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	)

	return isAuthenticated ? <>{children}</> : <Navigate to='/' />
}

export default PrivateRoute
