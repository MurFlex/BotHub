import { FC } from 'react'
import styles from './UserContainer.module.scss'

const UserContainer: FC = () => {
	return (
		<div className={styles.user}>
			<div className={styles.icon}>T</div>
			<div>
				<div className={styles.email}>test@test.test</div>{' '}
				{/* TODO: Отображать юзера из стейта */}
				<div className={styles.id}>ID: 23452345</div>
			</div>
			<svg width='12' height='9'>
				<use href='#arrow-icon' />
			</svg>
		</div>
	)
}

export default UserContainer
