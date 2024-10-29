import { FC, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'
import ChatBots from '@/pages/ChatBots'
import TabsWrapper from '@/layouts/CabinetLayout/TabsWrapper/TabsWrapper.tsx'
import { chatBotsTabs } from '@/configs/tabsConfig.ts'
import Templates from '@/pages/Templates'

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
                <Route element={
                    <TabsWrapper tabs={chatBotsTabs}/>
                }>
                    <Route path="bots" element={<ChatBots />} />
                    <Route path="templates" element={<Templates />} />
                </Route>
                
                <Route path='*' element={<NotFound />} />
            </Route>

            {/* Остальные роуты */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
)

export default AppRoutes
