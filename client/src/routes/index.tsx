import { FC, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Profile = lazy(() => import('../pages/Profile'))

const AppRoutes: FC = () => {
	return (
		<Router>
			<Routes>
				{/* Публичные роуты */}
				<Route path='/' element={<Home />} />
				<Route path='/login/' element={<Login />} />

				{/* Защищенные роуты */}
				<Route path='/cabinet/*' element={<PrivateRoute />}>
					<Route path='' element={<Profile />} />
				</Route>

				{/* Остальные роуты */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default AppRoutes
