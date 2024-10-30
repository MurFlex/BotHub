import { FC } from 'react'
import styles from './UserContainer.module.scss'
import { RootState } from '../../../../store'
import { useSelector } from 'react-redux'

const UserContainer: FC = () => {
    const user = useSelector((state: RootState) => state.auth.user)

    return (
        <div className={styles.user}>
            <div className={styles.icon}>{user?.email?.charAt(0).toUpperCase() || 'U'}</div>
            <div>
                <div className={styles.email}>{user?.email}</div>
                <div className={styles.id}>ID: {user?.id}</div>
            </div>
            <svg width='12' height='9'>
                <use href='#arrow-icon' />
            </svg>
        </div>
    )
}

export default UserContainer
