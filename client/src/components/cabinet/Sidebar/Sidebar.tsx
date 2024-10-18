import { FC } from 'react'
import NavList from './NavList/NavList'
import styles from './Sidebar.module.scss'
import { INavItem } from './types'

const Sidebar: FC = () => {
	const items: INavItem[] = [
		{
			icon: 'test1',
			text: 'testText1',
			link: 'testLink1',
		},
		{
			icon: 'test2',
			text: 'testText2',
			link: 'testLink2',
		},
	]

	return (
		<div className={styles.sidebar}>
			<div className={styles.logo}>BotHub</div>
			<NavList items={items} />
		</div>
	)
}

export default Sidebar
