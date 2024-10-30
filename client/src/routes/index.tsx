import { FC, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Profile = lazy(() => import('../pages/Profile'))

const AppRoutes: FC = () => (
    <Router>
        <Routes>
            {/* Публичные роуты */}
            <Route path='/' element={<Home />} />
            <Route path='/login/' element={<Login />} />
            <Route path='/register/' element={<Login />} />

            {/* Защищенные роуты */}
            <Route path='/cabinet/*' element={<ProtectedRoute />}>
                <Route path='' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Route>

            {/* Остальные роуты */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
)

export default AppRoutes
