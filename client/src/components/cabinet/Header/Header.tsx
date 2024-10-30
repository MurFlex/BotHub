import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import UserContainer from './UserContainer/UserContainer'

const Header: FC = () => (
    <header className={styles.header}>
        <Link to='/cabinet/create' className={styles.create}>
            <div className={styles.plus}>
                <svg width='20' height='20'>
                    <use href='#plus-icon' />
                </svg>
            </div>
            <span className={styles.text}>Создать бота</span>
        </Link>
        <UserContainer />
    </header>
)

export default Header
