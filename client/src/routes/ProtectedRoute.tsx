import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import CabinetLayout from '../layouts/CabinetLayout/CabinetLayout'
import { RootState } from '../store'

const PrivateRoute: FC = () => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	)

	return isAuthenticated ? (
		<CabinetLayout>
			<Outlet />
		</CabinetLayout>
	) : (
		<Navigate to='/login' />
	)
}

export default PrivateRoute
