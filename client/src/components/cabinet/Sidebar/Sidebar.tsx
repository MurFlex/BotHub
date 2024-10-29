import cn from 'classnames'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store'
import { toggleSidebar } from '../../../store/ui/uiSlice'
import NavList from './NavList/NavList'
import styles from './Sidebar.module.scss'
import { INavItem } from './types'

const Sidebar: FC = () => {
	const dispatch = useDispatch()
	const isHidden = useSelector((state: RootState) => state.ui.isSidebarHidden)

	const items: INavItem[] = [
		{
			icon: '#dashboard-icon',
			text: 'Дашборд',
			link: 'dashboard',
		},
		{
			icon: '#dashboard-icon',
			text: 'Контакты',
			link: 'contacts',
		},
		{
			icon: '#dashboard-icon',
			text: 'Чат-боты',
			link: 'bots',
		},
	]

	return (
		<div className={cn(styles.sidebar, { [styles.hidden]: isHidden })}>
			<Link to='/cabinet' className={styles.logo}>
				<svg width='36' height='36'>
					<use href='#logo' />
				</svg>
				<span>BotHub</span>
			</Link>
			<div className={styles.content}>
				<NavList items={items} />
				<button
					type='button'
					onClick={() => dispatch(toggleSidebar())}
					className={styles.button}
				>
					<svg width='12' height='9'>
						<use href='#arrow-icon' />
					</svg>
					<span>Свернуть меню</span>
				</button>
			</div>
		</div>
	)
}

export default Sidebar
