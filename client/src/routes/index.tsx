import { FC, lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Profile = lazy(() => import('../pages/Profile'))

const AppRoutes: FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Загрузка</div>}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</Router>
	)
}

export default AppRoutes
