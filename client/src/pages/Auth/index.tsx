import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Auth from '@/components/cabinet/Auth'
import { RootState } from '@/store'
import styles from './Auth.module.scss'

const Login: FC = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    )

    if (isAuthenticated) {
        return <Navigate to='/cabinet' />
    }

    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <div className={styles.logo}>BotHub</div>
                <div className={styles.number}>
                    <a href='tel:88888888888'>8 (888) 888-88-88</a>
                </div>
            </header>
            <Auth />
        </div>
    )
}

export default Login
